const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const mysql = require("mysql2");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rahul",
  database: "rahuldb",
  port: "3360",
});

db.getConnection(function (err) {
  if (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("server run on port 3001");
});

// app.get('/',(req , res) =>{
//    res.send("hello world");
//     // console.log("hello");
// });

app.get("/api/get", (req, res) => {
  const sql = "SELECT * FROM contact_data";
  db.query(sql, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post/data", (req, res) => {
    const { name,gmail,mobile,address,message } = req.body;
  const sqlInsert =
    "INSERT INTO contact_data (name,gmail,mobile,address,message) VALUES (?,?,?,?,?)";
  db.query(sqlInsert, [name, gmail, mobile, address, message], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.post("/api/post",(req ,res) => {
const { name,
          email,
          phone,
          organization,
          project,
          technology,
          budget,
          duration,
          message} = req.body;
const sql = "INSERT INTO client_data (name ,email ,phone ,organization ,project ,technology ,budget, duration ,message) VALUES (?,?,?,?,?,?,?,?,?)";
db.query(sql,[name ,email,phone,organization,project,technology,budget,duration,message],(error ,result) =>{
         if(error){
           console.log(error);
         }
});
});
