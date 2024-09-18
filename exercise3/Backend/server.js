const express = require('express') // Imports the express module, which is a web application framework for Node.js. It simplifies routing and handling HTTP requests.

const mysql = require('mysql')  //  Imports the mysql module, which allows Node.js to interact with MySQL databases.

const cors = require ('cors') // Imports the cors module, which enables Cross-Origin Resource Sharing, allowing your server to handle requests from different origins.


const app = express() // Creates an instance of an Express application.

const dbconn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express() // creates an express instance
app.use(cors()) // Applies the CORS middleware to the Express app.

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
})

// let's see whether we can connect to the database successfully or not
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database.');
});


app.get('/', (re, res) => {
    return res.json("Welcome to the DB class.");
})

app.get('/listall', (request, response) => {
    console.log("run sql now");
    const sql = "SELECT * from students"
    db.query(sql, (err, data) => {
        if(err) return response.json(err);
        else return response.json(data);
    })
 
})

app.listen(8081, () => {
    console.log("listening")
})



app.use(cors());


// when the browser points to localhost:8081/listall
app.get('/listall', (request, response) => {
    const stmt = "SELECT * FROM Students"
    dbconn.query(stmt, (err, data) => {
        if(err) return response.json(err)
        else return response.json(data)
    })
});

// when the browser points to localhost:8081/
app.get('/', (request, response) => { 
     return response.json("Welcome to the DB class.")
});

// set up the web server listener
app.listen(8081, () => {
    console.log("I am listening.")
});
