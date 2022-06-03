const express = require('express');
const app = express();
const port = 4000;
const path = require('path');

let router = express.Router();

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname,'public', 'tictactoeobj.html'));
});

app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
    console.log('Simple tic-tac-toe site is now running');
})