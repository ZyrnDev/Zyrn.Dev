---
title: 'A Coding Season'
date: '2020-12-19'
---

This month has been mostly comprised of holiday preparation and lots of time doing my daily challenge on <a href=https://adventofcode.com/2020>Advent of Code 2020</a>. This advent challenge gives you a sequence of challenges each harder than the last to do from December 1st until Christmas Day, providing a coherent story to drive the progression.

Each challenge can take anywhere from 20 minutes to a few hours to solve both parts of. This year I decided to take the challenge in <a href="https://www.rust-lang.org/">Rust</a> which helped me to greatly gain a depth of knowledge in this language as I used many different data structures and algorithms.

Rust allowed for some very clean solutions with both its advanced iterator support and operator overloading for structs (Rust's take on OOP).
For example, look at the simplicity of <a href="https://adventofcode.com/2020/day/3">day 3</a>'s solutions with the structs and operator overloading removed. 
```rust
pub fn part1(input: String) {
    let map = Grid::from(input);
    println!("Number of trees: {}", execute(&map, Point { x: 3, y: 1 }));
}

pub fn part2(input: String) {
    let map = Grid::from(input);
    let paths = vec![Point::from(1, 1), Point::from(3, 1), Point::from(5, 1), Point::from(7, 1), Point::from(1, 2)];
    let results = paths.iter().map(|p| execute(&map, *p));

    println!("Number of trees: {}", results.fold(1, |total, val| total * val));
}

fn execute(grid: &Grid, direction: Point) -> usize {
    let mut counter = 0;
    let mut pos = Point { x: 0, y: 0 };
    
    while pos.y < grid.dimensions.y {
        pos = pos % grid.dimensions;
        if grid.map[pos.y][pos.x] {
            counter = counter + 1;
        }
        // println!("Char: {}, X: {}, Y: {}", grid.map[pos.y][pos.x], pos.x, pos.y);
        pos = pos + direction;
    }
    counter
}
```
<br></br>
While other times, mutability issues and the minimum string manipulation tools resulted in string parsing looking like this unreadable and slow code taken from my <a href="https://adventofcode.com/2020/day/7">day 7</a> solution:
```rust
pub fn part1(input: String) {
    let mut rules: Vec<(String, Vec<String>)> = input.split("\r\n")
                .map(|bag| bag.split("contain").collect::<Vec<&str>>())
                .map(|bag| (bag[0], bag[1].split(",")))
                .map(|(style, list)| (style.trim().replace(".", ""), list.map(|s| s.trim().replace(".", "")).collect::<Vec<String>>()))
                // .map(|(style, list)| { style.clone().split_off(style.len()-5); (style, list.iter().map(|s| { s.split_off(s.len()-5); s }).collect::<Vec<&String>>()) })
                .collect();

    for (style, children) in rules.iter_mut() {
        style.split_off(style.len()-4);
        *style = String::from(style.trim());
        for style in children.iter_mut() {
            style.split_off(style.len()-4);
            *style = String::from(style.trim());
        }
    }
    
    let rules: Vec<(&String, Vec<&String>)> = rules.iter().map(|(style, children)| (style, children.iter().filter(|s| s != &"no other").collect::<Vec<&String>>())).collect();

    let rules: Vec<(&String, Vec<(usize, String)>)> = rules.iter().map(|(style, children)| {
        (*style, children.iter().map(|style| {
            let mut items = style.trim().split(" ").collect::<Vec<&str>>();
            (items.remove(0).parse::<usize>().unwrap(), items.join(" "))
        }).collect::<Vec<(usize, String)>>())
    }).collect();

    let root = build_tree(&rules);
    let matches = root.children.iter().filter(|child| tree_contains(child, &String::from("shiny gold"))).collect::<Vec<&Node>>();
    println!("{}", matches.len());

}
```

Overall, this gave me a great opportunity to dive deeper into Rust and practice solve complex problems.

Additionally, as you might have noticed in this post, I have added syntax highlighted code snippets to this website using <a href="https://prismjs.com/">Prism.js</a>. So hopefully I will be able to do some post where I get into the details of my code a little more.

See you next year with my January update!