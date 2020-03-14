const express = require('express');
const app = express();
const port = 3007;
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const userController = require('./controllers/users.js');
const sessionsController = require('./controllers/sessions.js');
const session = require('express-session');

/* MIDDLEWARE *********************************************************/
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/users',userController);
app.use('/sessions', sessionsController);
app.use(session({
    secret: 'feedmeseymour',
    resave: false,
    saveUninitialized: false
}));

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


/* SESSION ROUTES ******************************************************************/
app.get("/", (req, res) => {
    res.render("index.ejs", {
    });
});

/* APP ROUTES **********************************************************/
app.get('/recipes/new/:id', (req,res) => {                                          // new recipe
    // send fermentables
    Fermentable.find({}, (err,allFermentables) => {
        // send hops
        Hop.find({}, (err,allHops) => {
            // send yeast
            Yeast.find({}, (err,allYeast) => {
                res.render('app/new.ejs',{fermentables: allFermentables, hops: allHops, yeasts: allYeast,userId: req.params.id});
            });
        });
    });
});


app.get('/recipes/:id', (req,res) => {                                              // index
    Recipe.find({}, (err,allRecipes) => {
        res.render('app/index.ejs',{
            recipes: allRecipes, 
            userId: req.params.id
        });
    });
});

app.get('/recipes/view/:id', (req,res) => {                                         // view
    Recipe.findById(req.params.id, (err,foundRecipe) => {    
        res.render('app/view.ejs',{recipe: foundRecipe, userId: foundRecipe.user});
    });
});

app.get('/recipes/edit/:id', (req,res) => {                                     // edit
    Recipe.findById(req.params.id, (err,foundRecipe) => {
        // send fermentables
        Fermentable.find({}, (err,allFermentables) => {
            // send hops
            Hop.find({}, (err,allHops) => {
                // send yeast
                Yeast.find({}, (err,allYeast) => {
                    res.render('app/edit.ejs',{
                        recipe: foundRecipe, 
                        fermentables: allFermentables,
                        hops: allHops,
                        yeasts: allYeast,
                        userId: foundRecipe.user
                    });
                });
            })
        })
    });
});


app.delete('/recipes/delete/:id', (req,res) => {                                // delete
    console.log('delete route triggered');
    console.log(req.params.id);
    Recipe.findByIdAndRemove(req.params.id, (err,removedRecipe) => {
        res.redirect(`/recipes/${removedRecipe.user}`);
    });
});

app.post('/create/recipe/', (req,res) => {                                      // create recipes
    Recipe.create(req.body, (err,createdRecipe) => {
        res.redirect(`/recipes/${createdRecipe.user}`);
    })
})

app.put('/update/recipes/:id', (req,res) => {
    Recipe.findByIdAndUpdate(req.body, (err,updateRecipe) => {
        res.redirect('/recipes/');
    });
});

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