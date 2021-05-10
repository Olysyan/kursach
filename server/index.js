const express= require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')
const crypto = require('crypto');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: '14'
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.post('/fingerprint',(req,res)=>{
    const email = req.body.email
    const pass = req.body.pass
    const H = String(req.body.H)+"|"+String(req.body.W)+"|"+String(req.body.scr);
    var ru = req.body.ru;
    const g = req.body.g;
    const i = req.body.i;
    const ip = req.ip;    
    const oi = req.body.oi
    const session= req.body.session
    const tex = req.body.tex
    const SALT = 'o@$*sdk(';

    function generateHash(pass) {
      return crypto.createHmac('sha256', SALT)
        .update(pass)
        .digest('hex');
    }
    const hash1=generateHash((H+String(g)+String(ru)))
    console.log(ru)
    const sql= "INSERT INTO users (email, pass, hash, i, ip,canvas,fonts) VALUES (?,?,?,?,?,?,?);"
    db.query(sql,[email, pass, hash1, i, ip,String(session),String(tex)],(err,result)=>{
        console.log(err)
    })
})

db1 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'auth'
})
app.post('/login',(req,res)=>{
    const name = req.body.email
    const pass = req.body.pass
    db1.query("SELECT * FROM users WHERE name=? AND pass=?;",[name,pass],(err,result)=>{
        console.log(result[0])
        if(err){console.log(err)}
        if(result[0]){
            res.send(result)
        }else{res.send({message: "NO user found" })}
    })

})
app.post('/auth',(req,res)=>{
    const name = req.body.email
    const pass = req.body.pass
    const sql= "INSERT INTO users (name, pass) VALUES (?,?);"
    db1.query(sql,[name,pass],(err,result)=>{
        console.log(err)
    })

})


app.listen(3001,()=>{
    console.log('3001run')
})