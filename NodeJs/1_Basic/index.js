const express = require('express');
const app = express();
const router = express.Router();

const myLogger = (req, res, next) => {
    req.requestTime = Date.now();
    next();
}

app.use(myLogger);

router.get('/', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
});

router.get('/home', (req, res) => {
    // console.log(req);
    res.send('Hello From Home Page');
});

router.get('/about', (req, res) => {
    res.send('Hello From About Page');
});

router.get('/login', (req, res) => {
    res.send('Hello From Login Page');
});

router.get('/logout', (req, res) => {
    res.send('Hello From Logout Page');
});

app.use('/', router);
const PORT = process.env.port || 3000;
app.listen(PORT, () => {
    console.log(`server is running: http://localhost:${PORT}/`,)
});


