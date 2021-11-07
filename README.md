MyReads Project
In this repository is my execution of the MyReads: A Book Tracking App. This is the an assessment project for the Udacity's React Fundamentals course, part of the React Nanodegree Program. 
MyReads is a  bookshelf app that allows you to place books in one of three shelves.

Currently Reading
Want to Read
Read

It also allow you to search for books based on title and author.

You can see screenshots below.

Prerequisites
The project can be built with npm. 

npm is distributed with Node.js which means that when you download Node.js, you automatically get npm installed on your computer. Download Node.js

Installation
Inorder to get started, clone the repository, change directories, and use npm to install the dependencies.

$ git clone https://github.com/james-priest/reactnd-project-myreads.git
$ cd reactnd-project-myreads
$ npm install

Usage
The project can be run with

npm start
The project can be viewed in the browser at

http://localhost:3000

Backend Server
To simplify development process, Udacity provides a backend server for you to develop against. The provided file BooksAPI.js contains the methods you will need to perform necessary operations on the backend:

getAll
update
search
getAll
Method Signature:

getAll()
Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.
update
Method Signature:

update(book, shelf)
book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request
search
Method Signature:

search(query, maxResults)
query: <String>
maxResults: <Integer> Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
Returns a Promise which resolves to a JSON object containing a collection of book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
    
Screenshots
    

![Screenshot (238)](https://user-images.githubusercontent.com/62089415/140650192-faccde28-3d57-489b-aaa3-80552119e389.png)
    
![Screenshot (239)](https://user-images.githubusercontent.com/62089415/140650220-3820a04c-5f5e-4c3a-96e0-f1b8a1ae6bef.png)
