const express = require('express');
const app = express();
const port = 3007;
const methodOverride = require('method-override');
// set up mongoose
const mongoose = require('mongoose');

/* MIDDLEWARE *********************************************************/
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));


/* CONNECTIONS ********************************************************/
mongoose.connect("mongodb://localhost:27017/brew-builderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true    
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

const Fermentable = require('./models/fermentables.js');
const Hop = require('./models/hops.js');
const Yeast = require('./models/yeast.js');

/* ROUTES *************************************************************/
app.get('/recipes/', (req,res) => {                                            // index
    res.render('index.ejs');
})

const seedFermentables = require('./models/fermentables_seed.js');              // seed fermentables
app.get('/seed/fermentables/', (req,res) => {
    Fermentable.create(seedFermentables, (req,createFermentable) => {
        // redeirect here
    });
});

const seedHops = require('./models/hops_seed.js');                              // seed hops
app.get('/seed/hops', (req,res) => {
    Hop.create(seedHops, (req,createHop) => {
        // redirect here
    });
});

const seedYeast = require('./models/yeast_seed.js');                           // seed yeast
app.get('/seed/yeast', (req,res) => {
    Yeast.create(seedYeast, (req,createYeast) => {
        // redirect here
    });
});



/* LISTENER **************************************************************/
app.listen(port, () => {
    console.log("Server listening on port",port);
})