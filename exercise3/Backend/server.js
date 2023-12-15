const express = require('express')
const mysql = require('mysql')
const cors = require ('cors')


const app = express()

const dbconn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
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
