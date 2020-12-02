---
title: 'Web Applications in a Box'
date: '2020-10-26'
---

It has been a bit over a month since my last post and I have managed to get some good progress on some new projects.

Since I last made a post, I have put a few more hours into my language, but since progress was slow I decided to tackle a task which I could make quick progress in and be proud of. One the main goals for this project was to design an application using the docker ecosystem and build it entirely in docker containers. For now I will be sticking to design architectures I am more comfortable with splitting the functionality into a UI layer (Next.js w/React), Business Logic Layer (Express.js, Passport.js, etc) and a data layer (MongoDB, GraphQL, Apollo, etc) rather than trying to branch out to a more heavily micro-services based architecture.

As I alluded to earlier, I was trying to quick progress on this project rather than building everything by hand, so my tech list reads a bit like current treads buzzword list.

**Front End**
- Next.js
- React.js
- Apollo (GraphQL Client)

**Back End**
- Express.js
- Passport.js (authentication)
- NodeMailer.js (mail)
- Mongoose.js (database client)
- Express-GraphQL (GraphQL server)

**Data**
- MongoDB
- Apollo (client-side caching)
- GraphQL (schema & query design)

**Management**
- Nginx (Web Server)
- Mongo Express (Database Web Client)

This project was designed to be a base application for various purposes so as such it has a generic front-end template and the ability so simply add more data and functionality on the back-end. The database is highly flexibly too. In addition to these design choices I have added features to assist with user management, identification, authorisation and well as emailing. Furthermore, I have allowed many settings to be customised at environment to allow for a single application to be setup for many different clients with no changes to the codebase.

If you are interest in seeing what I currently have check out an example page <a href="https://example.zyrn.dev">here</a>. Also, you will probably here a bit more about this project in the future as I have a client for whom I will be using this framework to develop their solution. This will help me better flesh out the core features for this framework.

I hope to have tons of cool stuff to share next month, so until then I will be working hard on this.