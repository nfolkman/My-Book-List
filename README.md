# Reading Tracker with Local Authorization
This is a place where you can write down all the books you plan to read, are currently reading, have finished reading... or gave up on reading, because it was just that bad.

---

No longer will you have to say "That looked like an interesting book, I wish I could remember what it was called", because now you can add it to the list!
Or check your list and see you already had it planned.
Or have already read it.
Or already *tried* reading it and dropped it - and put it in this list so you wouldn't be fooled by it again!

Includes local authorization, so you don't have to download anything *and* no one else can see your list and judge you for your tastes.

**Link to project:** *TODO, not hosted live yet*

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, MongoDB

**Packages/Dependencies used:** bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

This program uses a local [Passport](https://www.passportjs.org/ 'Passport') solution to keep users' book lists separate. Once users have logged in (or signed up, if they are first time users), they are placed at their list of books.
Logged in users always go to the book list, those who are not logged in can only access the login or create account pages.
In their book list, users can add titles to their list along with a status (*Plan to read*, *Currently reading*, *Finished*, or *Abandoned*).
Users can also change the status of a book they have in their library (from *Plan to read* to *Currently reading*, for example, or from *Currently reading* to *Abandoned*).
And, of course, users can delete titles from their list.

All of the list storage and management is handled with Mongoose and MongoDB.
Rendering out the lists is done with EJS, along with some static CSS to make things not hideous, and JavaScript to add button functionality.

## Optimizations

Make no mistake, this is a pretty good Minimum Viable Product for less than a week of build time.
That said, it's bare bones. Given more time, we could implement some of the things we tabled due to time crunch:
* Page numbers for *Currently reading* and *Abandoned* titles, so you can see where you are/where you finally couldn't put up with the author any more
* The ability to sort the book list
* Additional data fields for books besides Title and Status, which the list could be sorted by (such as genre or author's name)
* And more! *TODO: Ask the other members of the team which ones I'm forgetting because there's certainly more than these three*

## Lessons Learned:

This was easier than we expected. Passport and Mongoose do most of the heavy lifting.

Coding this as a group was also surprisingly effective — rather than being a case of "too many cooks spoil the broth", we each would catch issues the others would miss and could cover for each others' weaker points. The asynchronus features of git are probably more powerful for seasoned developers, but for a group who are all just now trying to get a handle on new tech, replit was king.

## If you want to run this code yourself:

In addition to running `NPM install` *or* putting this code in a cloud provider of your choice;
You'll need a database to put this data in, and a connection to that database.
To do this locally,
- Create a `.env` file and add the following as `key: value` 
  - PORT: (can be any port, example: 3000) 
  - DB_STRING: `your database URI`

Doing this on a cloud provider will vary between providers (and presumably between UI updates.)




 # My Awesome Project
Write a short sentence or two about this project and what it does. Be sure to include a link and a screenshot (we're front end devs so we can actually see our work!).

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Framework of choice

Here's where you can go to town on how you actually built this thing. Write as much as you can here, it's totally fine if it's not too much just make sure you write *something*. If you don't have too much experience on your resume working on the front end that's totally fine. This is where you can really show off your passion and make up for that ten fold.

## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *fuck yeah I did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel


