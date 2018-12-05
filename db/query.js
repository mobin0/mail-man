var faker = require('faker');
var mongoose = require('mongoose');
var db = require('./connection.js');
var MailMan = require('./models.js')

class Database {
    constructor (){
    }

   async addToDB(data){
        await MailMan.create(data)
        .then(() => {
            db.disconnect(); 	    
            console.log("data saved to mailman db!")
        });
    }

    async queryDB(q){
        let r = []
        await MailMan.find(q)
        .then((err, results) => {
            r = results
        })
        return r
    }
}

t = new Database();
t.addToDB({id:1, url: "google.com", type: "String", data: '' + faker.company.catchPhrase()})
console.log(t.queryDB({}))