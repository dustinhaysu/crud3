console.log('May node be with you.')
const connectionString = 'mongodb+srv://big_tickles:12345@cluster0.ghgsto8.mongodb.net/?retryWrites=true&w=majority'

//REQUIRE *************************/
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const express = require('express')
app = express();

MongoClient.connect(connectionString, { useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

        
        //MIDDLEWARE ************************/
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({ extended: true }))
        app.use(express.static('public'))
        app.use(bodyParser.json()) //PUT main.js

//




//READ***********************************
app.get('/', (req,res) => {
    db.collection('quotes').find().toArray()
    .then(results => {
        res.render('index.ejs', {quotes:results })
    })
    .catch(error => console.error(error))    
})

//CREATE******************************/

app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
    .then(result => {
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

// UPDATE *********************/

app.put('/quotes', (req, res) => {
    quotesCollection.findOneAndUpdate(
        /*query*/ { name: 'Yoda' },
        /*update*/ { 
            $set: {
            name: req.body.name,
            quote: req.body.quote
        }
        },
        /*options*/ {upsert: true}
    )
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error))
})








//listeners*************************************** */

app.listen(3000, function (){
    console.log('listening on 3000')
})
    })
    .catch(error => console.error(error))

