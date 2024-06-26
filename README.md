
  
<h1 align="center">MERN Challenge </h1>

<div style= "text-align: center">

  <img src="https://img.shields.io/github/repo-size/schneidsmc/MERNchallenge" />
  <img src="https://img.shields.io/github/languages/top/schneidsmc/MERNchallenge" />
  <img src="https://img.shields.io/github/last-commit/schneidsmc/MERNchallenge" />
<br />

![esLint Badge](https://img.shields.io/badge/ESLint%20-%20%234B32C3?style=for-the-badge&logo=eslint&labelColor=black)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&labelColor=black)
![MongoDB Badge](https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js Badge](https://img.shields.io/badge/Node.js-%23339933?style=for-the-badge&logo=node.js&labelColor=black)
![Prettier Badge](https://img.shields.io/badge/prettier%20-%20%23F7B93E?style=for-the-badge&logo=prettier&labelColor=black)

</div>


## Table of Contents 

- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Installation](#installation-📋)
- [Usage](#usage-🏁)
- [Demonstration](#demonstration)
- [Author](#author-👋🏽)

## User Story

AS AN avid reader:
I WANT to search for new books to read SO THAT I can keep a list of books to purchase

## Acceptance Criteria

GIVEN a book search engine:
- WHEN I load the search engine THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
- WHEN I click on the Search for Books menu option THEN I am presented with an input field to search for books and a submit button
- WHEN I am not logged in and enter a search term in the input field and click the submit button THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
- WHEN I click on the Login/Signup menu option THEN a modal appears on the screen with a toggle between the option to log in or sign up
- WHEN the toggle is set to Signup THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
- WHEN the toggle is set to Login THEN I am presented with two inputs for an email address and a password and login button
- WHEN I enter a valid email address and create a password and click on the signup button THEN my user account is created and I am logged in to the site
- WHEN I enter my account’s email address and password and click on the login button THEN I the modal closes and I am logged in to the site
- WHEN I am logged in to the site THEN the menu options change to Search for Books, an option to see my saved books, and Logout
- WHEN I am logged in and enter a search term in the input field and click the submit button THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
- WHEN I click on the Save button on a book THEN that book’s information is saved to my account
- WHEN I click on the option to see my saved books THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
- WHEN I click on the Remove button on a book THEN that book is deleted from my saved books list
- WHEN I click on the Logout button THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

## Installation 📋

Running `npm i` to install all the dependancies. Run `npm run build` to build the application. Open integrated terminal in the client terminal then`npm run start` will launch both the front end and the back end of this application. This will launch the Apollo Server and GraphQL and it will be running on PORT 3001.


## Usage 🏁

When you open the application, the user can login or sign up and then search the google books api. The search engine will return a list of books and the user can hit save this book and it will save under the users account. The user can also then delete the book from that list.

## Demonstration


<img src="public/login.png" alt="login" width="300" height="auto"> 
<br />
<img src="public/user-books.png" alt="userbooks" width="300" height="auto"> 
<br />
<img src="public/delete-book.png" alt="delete" width="300" height="auto"> 

## Author 👋🏽

GitHub Username: [schneidsmc](https://github.com/schneidsmc)

📧 Email: schneidsmc@gmail.com

This README was created with ❤️ using README Generator 👏🏽👏🏽

