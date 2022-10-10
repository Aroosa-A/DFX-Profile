DFX Profile - Team Project
==========================

About the Project
-------

- This Project was in team
- I worked on both frontend and backend of this project
- From frontend i worked on writing code for components and async calls to get data from database
- We were assigned this project at end of our training with Digital Futures

Build With:
-------
**Framework/Libraries**
- Express Node.js
- React.js
- Mocha-Chai

**Languages**
- JavaScript
- CSS
- HTML

**DataBase**
- NoSql
- MongoDB Atlas

**Packages**
- Cors
- Body Parser
- DotEnv
- Express Validator
- Mongoose
- Axios
- React Router Dom

Getting Started:
-------
Steps to follow in order to run this project locally on your machine

1. Clone the repo

    You can copy project link from *green* button named as **Code**,link should be like this
    ```
    git clone http://github.com/your-username/Project-name.git
    ```
2. Install dependencies

    You can do it by writing this command in terminal or by right clicking on **Package.json** file and selecting *Install dependencies* of both folders
    ```
    npm install
    ```
3. Connect with MongoDB

    You have to replace DB_URI="with this command" from .env.development file of BackEnd folder
    ```
    mongodb://localhost:27017/userData
    ```
4. Run servers

    Open integrated terminal from **Package.json** files from both *FRONTEND* and *BACKEND* folders and apply command
    ```
    npm start
    ```

5. Test

    You have to replace DB_URI="with this command" from .env.test file of BackEnd folder
    ```
    mongodb://localhost:27017/userData-test
    ```
    You can run tests of both folders by opening integrated terminal from **Package.json** file and running this command in terminal
    ```
    npm test
    ```
Problem Statement:
---------

```
As a graduate user I want to manage my DFX profile so that I can keep it current
```

### User stories
```
1. As a graduate user I want to be able to view my profile so that I can check it for errors and omissions

2. As a graduate user I want to be able to edit my profile so that I can add or update information

3. As a graduate user I want to be able to upload an image of myself so that it can be displayed on my profile

4. As a graduate user I want to be able to login to the system so that I can view and edit my profile
```

Project Review:
-----

- It was great experience to work in team
- We collaborated on Git very well
- Team was good at communicating and collaborating work
- Could have used Bootstrap to save time
- If i continue developing it i will connect it with individual user by getting the id of user to display all related data of that particular person
