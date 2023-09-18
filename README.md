# Issue-Tracker
Create a nodejs + ejs  application to track issues/bugs for a project.

- Git Repository link: https://github.com/PoojaDornal/issue-tracker1
- Video-link: https://drive.google.com/file/d/1sJ3kaamZrnMhqWOqG0Ty2cLe48AHAEXv/view
- Hosted link: https://issuetracker-main-airs.onrender.com/

  ## Installation
To install issue-tracker application,  please follow these steps:

Clone this repository using the following command:
```
$ git clone (https://github.com/PoojaDornal/issue-tracker1.git)
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:8000 
```

## Features
1. Build a neat UI
2. Home Page
    2.1 Show a list of projects.
    2.2 Give a button to create a new Project (On creating a new project it should appear in the list)
3. Create Project Page
 3.1 Accept the following fields to create a project
      -Name
      -Description
      -Author
4. Project Detail Page
    - When the user clicks on a project (in home page) redirect the user to this page which will show bugs related to this project
    - User should be able to perform following actions on this page
    - Filter by multiple labels i.e. I should be able to filter by 2 or more labels at the same time
    - Filter by author
    - Search by title and description
5. A button to create an issue
   -  Create issue page
   - User should be able to create an issue for a project
   - Accept the following fields
  - Title
  - Description
  - Labels (multiple labels can be added to a project, IF a project has a label already show it (in dropdown) as the user types the label in)
  - Author

