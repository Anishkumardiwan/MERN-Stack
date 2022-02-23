const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const userDB = [{UserName: "Anish" , passWord: "12345"}]

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
        res.send("Correct User");
    } else {
        res.send("Incorrect User")
    }

    res.send('User Authenticate');
});

router.get('/logout', (req, res) => {
    res.send('Hello From Logout Page');
});

app.use('/', router);
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`server is running: http://localhost:${PORT}/`,)
});









