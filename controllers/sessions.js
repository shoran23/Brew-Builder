const express = require('express');
const router = express.Router();
const User = require('../models/users.js');

let currentUser;

router.get('/new', (req, res)=>{
    res.render('sessions/new.ejs');
});

router.post('/', (req, res)=>{
    User.findOne({username: req.body.username}, (err, foundUser) => {
        if(foundUser) {
            if(req.body.password == foundUser.password){
                currentUser = foundUser;
                res.render('app/welcome.ejs',{currentUser: currentUser});
            } else {
            res.send('<a href="/">wrong password</a>')
            }
        }
    });
});

module.exports = router;