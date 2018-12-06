const express = require('express');
const Database = require('./../db/query.js')
const MailMan = require('./../db/models.js')
const faker = require('faker')
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


t = new Database();
// t.addToDB({id:1, username: 'billy', url: "google.com", type: "String", data: '' + faker.company.catchPhrase()})

//url, type, data
app.get('/api/:username', (req,res) => {
    let username = req.params.username;
    console.log(username)
    MailMan.find({username:username}, (e,r) => {
        res.send(r)
    })  
})

let port = 4321;
app.listen(port, () => {`listening to ${port}`})