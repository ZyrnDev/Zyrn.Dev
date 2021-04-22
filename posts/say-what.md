---
title: 'Say What?'
date: '2021-01-25'
---

For me, this month has had a big focus on languages, compilers, and eco-systems. 
To start with I returned and old language project, where I was trying to build a language with no experience, no examples, no textbooks and no idea what was involved.

This was a simple implementation of a language which I had only barely started lexing. 
The only thing I can be proud of with that implementation was the fact that I used my own butcher form of EBNF document to define the language's syntax.
After getting a rather ugly lexing system going I realised I had no clue what comes next.

At this point I started searching for resources online which I could learn from.
With some help from a friend I was able to find <a href="https://craftinginterpreters.com/">'Crafting Interpreters'</a> an electronic book by Bob Nystrom (<a href="https://twitter.com/intent/user?screen_name=munificentbob">@munificentbob</a>).

This book is an amazing resource and has allowed me to understand and build a whole language despite having next to no experience beforehand. So far, I have implemented lexing, parsing, a syntax tree, an execution environment and expression and statement evaluation.

Additionally, while working through this book I have been working on my entirely separate language in Rust where I am working on the parsing phase.
Ideally, I will be using <a href="https://llvm.org/">LLVM</a> <a href="https://crates.io/crates/llvm-sys">wrapper</a> for a compiler backend in list language so I am excited for that as I will get a programming language that might even be usable.

Until then, wishing you a Happy New Year!