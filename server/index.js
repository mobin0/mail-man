const express = require('express');


const app = express();
app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let port = 4321;
app.get('/', (req,res)=> {
    res.send("YAMON")
})
app.listen(port, () => {`listening to ${port}`})