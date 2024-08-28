In this project, you will create a simple Web-based app using mysql, nodejs and react. 

1. Watch video: https://www.youtube.com/watch?v=Q3ixb1w-QaY
2. Install nodejs and npm, and packages including express, mysql, cors, and nodemon.
3. Change the file server.js to display the results of running 10 SELECT statements. Each statement should select from at least three tables and its where clause has at least three conditions.  
4. The code should be running to deserve full credits. Submit all SQL statements in a file called sql.txt. 

Note: grading is based on your fluency of SQL, the success execution result of server.js showing on the web browser and your explanation skill of the result. 

-------------------------------------------------------------------------------------------

A tutorial
Watch: https://www.youtube.com/watch?v=Q3ixb1w-QaY

Instructions: 
Assume you are at the project directory: mysqlreact
0. install node and npm to ensure they are installed, run node -v and npm -v. 
1. cd Backend
2. npm init -y 
3. npm install express mysql cors nodemon
4. npm start // to start the Backend: the web server
5. cd ..
6. npm create vite@latest     // create the Frontend
  choose a project name `Frontend`
  choose react
  choose javascript

7. cd FrontEnd
8. npm install
9. npm run dev // start the Frontend

To get the sample project working: 
1. Crate a directory called ```reactmysql``` as your project directory. 
2. Under ```reactmysql```, create two directories ```Backend``` and ```Frontend```. 
1. Copy the files under Backend and Frontend (under https://github.com/shiyonglu/database_javascript/tree/main/exercise3) to their respective directories.
2. Create a table called students in the ``test`` database as follows:

```SQL
CREATE TABLE students (id SMALLINT, name VARCHAR(100), birthday DATE, gpa FLOAT);

INSERT INTO students VALUE (1, "peter", '08-22-1988', 3.1);

INSERT INTO students VALUE (2, "kathy", '08-12-1997', 3.2);

INSERT INTO students VALUE (3, "mike", '08-02-1999', 3.3);

INSERT INTO students VALUE (4, "john", '06-13-1998', 3.7);

```

3. cd Backend
4. npm init -y
5. npm install express mysql cors nodemon
6. Modify the scripts section of the Backend/package.json as follows:

```javascript
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
```
7. Start the backend: 1) ```cd Backend```, and run ```npm start```.
8. Point your brower to ```localhost: 8081``` and ```locahost:8081/listall``` to browse two end points. The later should show the content of the students table.


