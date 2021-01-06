const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// using cors package
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
const myConnectionString = 'mongodb+srv://admin:drq12349@cluster0.hd8xq.mongodb.net/cocktails?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;
// schema made for database
// telling database what type of data is being stored
var cocktailsSchema = new Schema({
    name: String,
    base: String,
    ingredients: String,
    picture: String
});
// allows me to write data to database
var CocktailsModel = mongoose.model("cocktail", cocktailsSchema);

// Get request 
app.get('/api/cocktails', (req, res) => {

     const mydrinks = [
    //      {
    //          "Name": "Bloody Mary",
    //           "Base": "Vodka",
    //           "Ingredients":  "1 1/2 oz Vodka , 1/2 oz Lemon Juice, 3 oz Tomato Juice, Pepper, Salt",
    //           "Picture": "https://www.thecocktaildb.com/images/media/drink/t6caa21582485702.jpg"
    //      },
    //      {
    //           "Name": "3-Mile Long Island Iced Tea",
    //            "Base": "Gin",
    //           "Ingredients":  "1/2 oz Gin , 1/2 oz Light Rum, 1/2 oz Tequila, 1/2 oz Triple Sec, 1/2 oz Vodka, Coca-Cola, Lemon",
    //           "Picture": "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg"
    //       },

    //  {
    //               "Name": "Zombie",
    //              "Base": "Rum",
    //              "Ingredients":  "25ml Dark Rum , 25ml White Rum, 50 ml of Lime juice, 150ml lime juice, 1 tsp Grenadine",
    //             "Picture": "https://www.thecocktaildb.com/images/media/drink/2en3jk1509557725.jpg"
    //        }

     ];
    
    // find records of database and send them back
   CocktailsModel.find((err, data) => {
        res.json(data);
    })

    // object and message being passed down
    // res.status(200).json({
      
    //  drinks: mydrinks
    // });
})

// listens to a get request at local host...
app.get('/api/cocktails/:id', (req, res) => {
    console.log(req.params.id);

    // call back function
    //sends back data
   CocktailsModel.findById(req.params.id, (err, data) => {
        res.json(data);
    })
})

app.put('/api/cocktails/:id', (req, res) => {
    console.log("Update drinks: " + req.params.id);
    console.log(req.body);
    // method that makes an asynchronous call to database
    // when request is finished it sends back some data
    CocktailsModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
           })
})

// listens to post request at url
// Pulls title,year and poster out of body
app.post('/api/cocktails', (req, res) => {
    console.log("Drinks Received!");
    console.log(req.body.name);
    console.log(req.body.base);
    console.log(req.body.ingredients);
    console.log(req.body.picture);

    // create method - write data to database
   CocktailsModel.create({
       name: req.body.name,
        base: req.body.base,
        ingredients: req.body.ingredients,
        picture: req.body.picture,
    })

    // send a response down to client
    res.send('Item Added');
})

app.delete('/api/cocktails/:id', (req, res) => {
    // logs to console and pulls out id from url
    console.log("Delete Drink: " + req.params.id);
    //console.log(req);
    //deletes record and sends back data
    CocktailsModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})