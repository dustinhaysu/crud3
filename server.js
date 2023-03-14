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

//




//READ***********************************
app.get('/', (req,res) => {
    db.collection('quotes').find().toArray()
    .then(results => {
        //res.render('index.ejs', {quotes:results })
        console.log(results)
    })
    .catch(error => console.error(error))
    res.render('index.ejs',{})
   
    
})

//CREATE******************************/

app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
    .then(result => {
        res.redirect('/')
    })
    .catch(error => console.error(error))
})








//listeners*************************************** */

app.listen(3000, function (){
    console.log('listening on 3000')
})
    })
    .catch(error => console.error(error))

