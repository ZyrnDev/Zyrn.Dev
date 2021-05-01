import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostMetaData {
  id: string,
  date: string,
  title: string
}

export interface PostData extends PostMetaData {
  contentHtml: string
}

export function getSortedPostsData(unreleased = false): PostMetaData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory).filter( (value, index, array) => { return (unreleased ? /\.md.unreleased$/ : /\.md$/).test(value) } )
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace((unreleased ? /\.md.unreleased$/ : /\.md$/), '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return <PostMetaData> {
      id,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return allPostsData.sort((a: PostMetaData, b: PostMetaData) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(unreleased = false) {
  const fileNames = fs.readdirSync(postsDirectory).filter( (value, index, array) => { return (unreleased ? /\.md.unreleased$/ : /\.md$/).test(value) } )

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace((unreleased ? /\.md.unreleased$/ : /\.md$/), '')
      }
    }
  })
}

export async function getPostData(id: string, unreleased: boolean = false) {
  const fullPath = path.join(postsDirectory, (unreleased ? `${id}.md.unreleased` : `${id}.md`))
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .use(prism)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return <PostData> {
    id,
    contentHtml,
    ...matterResult.data
  }
}