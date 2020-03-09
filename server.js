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
const Recipe = require('./models/recipes.js');

/* ROUTES *************************************************************/
app.get('/recipes/new', (req,res) => {                                          // new recipe
    // send fermentables
    Fermentable.find({}, (err,allFermentables) => {
        // send hops
        Hop.find({}, (err,allHops) => {
            // send yeast
            Yeast.find({}, (err,allYeast) => {
                res.render('new.ejs',{fermentables: allFermentables, hops: allHops, yeasts: allYeast});
            });
        });
    });
});

app.get('/recipes', (req,res) => {                                              // index
    Recipe.find({}, (err,allRecipes) => {
        res.render('index.ejs',{recipes: allRecipes});
    });
});

app.get('/recipes/:id', (req,res) => {                                          // view
    Recipe.findById(req.params.id, (err,foundRecipe) => {    
        res.render('view.ejs',{recipe: foundRecipe});
    });
});

app.delete('/recipes/delete/:id', (req,res) => {                                // delete
    console.log('delete route triggered');
    console.log(req.params.id);
    Recipe.findByIdAndRemove(req.params.id, (err,removedRecipe) => {
        res.redirect('/recipes/');
    });
});

app.post('/create/recipe', (req,res) => {                                       // create recipes
    console.log(req.body.name);
    console.log(req.body.startingGravity);
    console.log(req.body.batchVolume);
    console.log(req.body.brewEfficiency);
    console.log(req.body.selectedFermentable);
    console.log(req.body.percentFermentable); 
    console.log(req.body.amountFermentable);
    console.log(req.body.selectedHop);
    console.log(req.body.timeHop);
    console.log(req.body.amountHop);
    console.log(req.body.selectedYeast);
    console.log(req.body.finalGravity);
    console.log(req.body.finalAVB);
    console.log(req.body.totalIBU);
    Recipe.create(req.body, (err,createRecipe) => {
        res.redirect('/recipes/');
    })
})




const seedFermentables = require('./models/fermentables_seed.js');              // seed fermentables
app.get('/seed/fermentables/', (req,res) => {
    Fermentable.create(seedFermentables, (err,createFermentable) => {
        // redeirect here
    });
});

const seedHops = require('./models/hops_seed.js');                              // seed hops
app.get('/seed/hops', (req,res) => {
    Hop.create(seedHops, (err,createHop) => {
        // redirect here
    });
});

const seedYeast = require('./models/yeast_seed.js');                           // seed yeast
app.get('/seed/yeast', (req,res) => {
    Yeast.create(seedYeast, (err,createYeast) => {
        // redirect here
    });
});





/* LISTENER **************************************************************/
app.listen(port, () => {
    console.log("Server listening on port",port);
})