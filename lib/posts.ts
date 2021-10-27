import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
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

function getPostFileNames(unreleased = false) {
  return fs.readdirSync(postsDirectory).filter( (value) => {
    return (unreleased ? /\.unreleased.md$/ : /^((?!\.unreleased).)*\.md$/).test(value) // Some regex magic thanks to the gods of stackoverflow
  });
}

function getPostDataByFileName(fileName: string, unreleased = false): PostMetaData {
  const id = fileName.replace((unreleased ? /\.unreleased.md$/ : /\.md$/), '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents); // Use gray-matter to parse the post metadata section

  return {
    id,
    ...matterResult.data
  } as PostMetaData;
}

export function getSortedPostsData(unreleased = false): PostMetaData[] {
  const fileNames = getPostFileNames(unreleased);
  const allPostsData = fileNames.map(fileName => getPostDataByFileName(fileName, unreleased));
  
  // Sort posts by date
  return allPostsData.sort((a: PostMetaData, b: PostMetaData) => (a.date < b.date) ? 1 : -1);
}

export function getAllPostIds(unreleased = false): { params: { id: string } }[] {
  const fileNames = getPostFileNames(unreleased);

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace((unreleased ? /\.unreleased.md$/ : /\.md$/), '')
      }
    }
  })
}

export async function getPostData(id: string, unreleased = false): Promise<PostData> {
  const fullPath = path.join(postsDirectory, (unreleased ? `${id}.unreleased.md` : `${id}.md`))
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).use(gfm).use(prism).process(matterResult.content);
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  } as PostData;
}