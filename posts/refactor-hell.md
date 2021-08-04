---
title: 'Refactor Hell'
date: '2021-03-16'
---

Once again, this month I revisited an old project and improved it. This project was the notifications app I developed in November last year, which I discussed at the time in [this article][1].

The largest change on all was a complete overhaul of the backend architecture, which was centered around the change for a singular [SQLite][2] database on deployed server to using Google Firebase's [Firestore][3], offering a host of benefits such as:
* Cloud Data Redundancy
* Security (SQL injection style vulnerabilities)
* Scalability
* Increase Maintainability (no need for a RESTful API)

This change in database and also [database paradigm][4], also resulted in a much more manageable code base as I switched from a loose imperative coding style to an object oriented design which more closely matched the document style database.
This meant there were a lot less confusing and poorly design bits of code as there was a clear data model of which the class models could imitate.

The removal of the RESTful API was particularly nice as it was poorly structured, using no extra layers of abstraction from the minimalistic design of [Express.js][5].
One example of this poor code quality was the heavy use of try-catches around a single line of code or using await without any error handling.

### An example of poor asynchronous code and error handling
```js
// routes/topic.js (API endpoint for handling subscriptions to topics)
router.get('/', async (req, res) => {   
try {
    res.json(await db.getMemberGroups());
} catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error: " + err);
}

await db.unsubscribeFromGroup(token, topic).catch(err => {});
});
```

### An example of event based programming, which is not subject to some errors which async / await introduced.
```js
// lib/Jobs.js (controller for issusing notifications)
this.ref.onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
            this.jobs.set(change.doc.id, { data: change.doc.data() });
            if (change.doc.data().isSubscribed) {
                this.registerJob(change.doc);
            }
        }
        if (change.type === 'modified') {
            this.jobs.set(change.doc.id, change.doc.data());
            if (change.doc.data().isSubscribed) {
                this.registerJob(change.doc);
            } else {
                this.deregisterJob(change.doc);
            }
        }
        if (change.type === 'removed') {
            this.jobs.delete(change.doc.id);
            this.deregisterJob(change.doc);
        }
    });
});
```

As a result of this change on database, I also upgraded the security of the authentication within the system, moving from manually issues API tokens, to more secure, flexible, and accessible tokens issued using [Google Firebase Auth][6].

These major changes in the backend, meant the frontend needed a significant re-write. I used this opportunity to upgrade to [Flutter 2][7], using [null safety][8].

[1]: /blog/a-fluttering-experience "November 2020 Flutter Notification App"
[2]: https://www.sqlite.org/ "SQLite"
[3]: https://firebase.google.com/products/firestore "Google Cloud Firestore"
[4]: https://en.wikipedia.org/wiki/Database_model "Database Paradigms"
[5]: https://expressjs.com/ "Express.js"
[6]: https://firebase.google.com/products/auth "Google Firebase Authentication"
[7]: https://developers.googleblog.com/2021/03/announcing-flutter-2.html "Flutter 2 Announcement"
[8]: https://flutter.dev/docs/null-safety "Null Safety"
