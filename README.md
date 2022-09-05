# Reading Tracker with Local Authorization
This is a place where you can write down all the books you plan to read, are currently reading, have finished reading... or gave up on reading, because it was just that bad.

---

No longer will you have to say "That looked like an interesting book. I wish I could remember what it was called..." Now you can add it to the list!
Or check your list and see you already had it planned.
Or have already read it.
Or already *tried* reading it and dropped it - and put it on this list so you wouldn't be fooled by it again!

Includes local authorization, so you don't have to download anything *and* no one else can see your list and judge you for your tastes.

**Link to project:** Coming Soon



## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, MongoDB

**Packages/Dependencies used:** bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

This program uses a local [Passport](https://www.passportjs.org/ 'Passport') solution to keep users' book lists separate.

Once users have logged in (or signed up, if they are first-time users), they are directed to their list of books. Those who are not logged in can only access the login or create account pages.

In their book list, users can add titles to their list along with a status (*Plan to read*, *Currently reading*, *Finished*, or *Abandoned*).
Users can also change the status of a book in their library (from *Plan to read* to *Currently reading*, for example, or from *Currently reading* to *Abandoned*).
And, of course, users can delete titles from their list.

All of the list storage and management is handled with Mongoose and MongoDB.
Rendering out the lists is done with EJS, along with some static CSS to make things not hideous, and client-side JavaScript to handle button functionality.

## Optimizations

Make no mistake, this is a pretty good Minimum Viable Product for less than one day of build time.
That said, it's bare bones. Given more time, we would implement some of the features we tabled due to time crunch:

* Connection to a books API to provide additional functionality (e.g., an autocomplete search bar for adding titles) and design features (e.g., display of book covers)
* The ability to sort the book list
* Additional data fields for each book beyond Title and Status (e.g., genre, author), which the list could be sorted by
* Page numbers for *Currently reading* and *Abandoned* titles, so users can see where they are/where they finally couldn't put up with the author anymore
* A notes field for *Currently reading* and *Abandoned* titles, where users can store favorite quotes or ideas sparked by their reading
* The ability to add ratings to *Finished* titles
* And more!

## Lessons Learned:

This was easier than we expected. Passport and Mongoose do a lot of the heavy lifting.

Coding this as a group was also surprisingly effective. Rather than being a case of "too many cooks spoil the broth," we would each catch issues the others would miss and could cover for each others' weaker points. The asynchronus features of git are probably more powerful for seasoned developers, but for a group of developers still getting a handle on some of the tech, replit simplified collaboration considerably.

## If you want to run this code yourself:

In addition to running `npm install` *or* putting this code in a cloud provider of your choice, you'll need a database to put this data in, and a connection to that database.

To do this locally:
- Create a `.env` file and add the following as `key: value` 
  - PORT: (can be any port, example: 3000) 
  - DB_STRING: `your database URI`

Doing this on a cloud provider will vary between providers (and presumably between UI updates.)