const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

// MongoDB Connection
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/');
// }
mongoose.connect('mongodb://localhost:27017/');

let db = mongoose.connection;

db.on('error', () => {
    console.log('DB unable to connect');
});

db.on('open', () => {
    console.log("connection successful");
});


// Create Schema
let BookSchema = mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});
let Book = mongoose.model('Book', BookSchema);

// Creation
let book1 = new Book({ name: 'javaScript', price: 799, quantity: 130 });
book1.save()
    .then(() => { console.log('Book Saved Successfully'); })
    .catch(() => { console.log('Some Error Occured'); })

// Reading
Book.find({ name: 'javaScript' })
    .then((books) => { console.log(books); })
    .catch((err) => { console.log(err) });

// Update
Book.updateOne({ id: 10 }, { price: 999 })
    .then(() => { console.log("DB Updated") })
    .catch((err) => { console.log(err) });

// User in DB
const userDB = [{ UserName: "Anish", passWord: "12345" }]

// const appData = async() =>{

// }
// Logger Middleware
const myLogger = (req, res, next) => {
    req.requestTime = Date.now();
    console.log('myLogger');
    next();
}

app.use(myLogger);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

router.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime} </small>`
    res.send(responseText)
});

router.post('/register', (req, res) => {
    const { userName, passWord, name, email } = req.body;

    // store all things in DB except password

    // generate a hash for thata password
    // store the generated hash in the DB
});

router.post('/login', (req, res) => {
    const { userName, passWord } = req.body;
    console.log(userName, passWord);

    // Check if user is exits in DB or not
    const isUserPresent = userDB.find(user => user.UserName === userName);
    if (!isUserPresent) {
        res.status(404).send("User is not Present");
    }

    // Generate the Hash for the Password 
    // Get the Encrypted password from DB userName
    // Compare Both Values

    const isEqual = isUserPresent.passWord === passWord;
    if (isEqual) {
        // Generate Token
        // store tokens in the DB
        // send the token as response back to the user

        res.send("Correct User");
    } else {
        res.send("Incorrect User");
    }

    res.send('User Authenticate');
});

// API to Get all the BOOKS
router.get('/books', (req, res) => {
    // Return all Books From a DB
    Book.find().then((books) => {
        res.send(books);
    }).catch((err) => {
        res.status(400).send({ message: "Something Went Wrong" })
    });
});

// API For Creating a Books
router.post('/book', (req, res) => {
    const { name, price, quantity } = req.body;
    const newBook = new Book({ name: name, price: price, quantity: quantity });
    newBook.save()
        .then(() => {
            res.status(200).send(newBook)
        }).catch((err) => {
            res.status(400).send(err);
        });
});

// Read a Single Book with a given 
router.get('/book/:id', (req, res) => {
    
});

router.get('/profile', (req, res) => {
    // whether the request contains the token or not.
    // If it contains , compare the token from DB.
    // If the token matches, the correct user is logged in.

    res.send('Profile Page');
});

router.get('/logout', (req, res) => {
    res.send('Hello From Logout Page');
});

app.use('/', router);
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`server is running: http://localhost:${PORT}/`,);
});









