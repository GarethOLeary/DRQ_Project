const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application that allows the body of a http request to be parsed
app.use(bodyParser.urlencoded({ extended: false }))

// parse application for json
app.use(bodyParser.json())

// string to connect you to database 
const myConnectionString = 'mongodb+srv://admin:drq12349@cluster0.hd8xq.mongodb.net/drinks?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;
// schema made for database
// telling database what type of data is being stored
var drinksSchema = new Schema({
    name: String,
    picture: String
});

// allows me to write data to database
var DrinksModel = mongoose.model("drinks", drinksSchema);
var DrinkModel = mongoose.model("vodkaDrinks", drinksSchema);
var GinModel = mongoose.model("ginDrinks", drinksSchema);


// Get request 
app.get('/api/drinks', (req, res) => {

     const mydrinks = [
        {
          
        }
           

     ];

   
// find records of database and send them back
DrinksModel.find((err, data) => {
    res.json(data);
})

    
})

// Get request 
app.get('/api/gindrinks', (req, res) => {

    const gindrinks = [
       {
         
       }
          

    ];
    GinModel.find((err, data) => {
        res.json(data);
     })

})




// Get request 
app.get('/api/vodkadrinks', (req, res) => {

    const drinks = [
       {
         
       }
          

    ];
//res.status(200).json({
    //message: "all ok",
    //vodkadrinks:drinks
//})
// find records of database and send them back
DrinkModel.find((err, data) => {
   res.json(data);
})


   
})

// listens to a get request at local host...
app.get('/api/drinks/:id', (req, res) => {
    console.log(req.params.id);

    // call back function
    //sends back data
    DrinksModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// listens to a get request at local host...
app.get('/api/vodkadrinks/:id', (req, res) => {
    console.log(req.params.id);

    // call back function
    //sends back data
    DrinkModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.get('/api/gindrinks/:id', (req, res) => {
    console.log(req.params.id);

    // call back function
    //sends back data
    GinModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

// listens for put request that passes in id
app.put('/api/drinks/:id', (req, res) => {
    console.log("Update drinks: " + req.params.id);
    console.log(req.body);
    // method that makes an asynchronous call to database
    // when request is finished it sends back some data
    DrinksModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

// listens for put request that passes in id
app.put('/api/vodkadrinks/:id', (req, res) => {
    console.log("Update drinks: " + req.params.id);
    console.log(req.body);
    // method that makes an asynchronous call to database
    // when request is finished it sends back some data
    DrinkModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

// listens for put request that passes in id
app.put('/api/gindrinks/:id', (req, res) => {
    console.log("Update drinks: " + req.params.id);
    console.log(req.body);
    // method that makes an asynchronous call to database
    // when request is finished it sends back some data
    GinModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

app.post('/api/vodkadrinks', (req, res) => {
    console.log("Drinks Received!");
    console.log(req.body.name);
    console.log(req.body.picture);

    DrinkModel.create({
        name: req.body.name,
        picture: req.body.picture
    })
    res.send('Item added')
})



app.post('/api/gindrinks', (req, res) => {
    console.log("Drinks Received!");
    console.log(req.body.name);
    console.log(req.body.picture);

    GinModel.create({
        name: req.body.name,
        picture: req.body.picture
    })
    res.send('Item added')
})

app.post('/api/drinks', (req, res) => {
    console.log("Drinks Received!");
    console.log(req.body.name);
    console.log(req.body.picture);


    // create method - write data to database
    DrinksModel.create({
        name: req.body.name,
        picture: req.body.picture
    })

    
   res.send('Item added')
    })

    // listens for http delete method
app.delete('/api/drinks/:id', (req, res) => {
    // logs to console and pulls out id from url
    console.log("Delete Drink: " + req.params.id);

    //deletes record and sends back data
    DrinksModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.delete('/api/vodkadrinks/:id', (req, res) => {
    // logs to console and pulls out id from url
    console.log("Delete Drink: " + req.params.id);

    //deletes record and sends back data
    DrinkModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.delete('/api/gindrinks/:id', (req, res) => {
    // logs to console and pulls out id from url
    console.log("Delete Drink: " + req.params.id);

    //deletes record and sends back data
    GinModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})