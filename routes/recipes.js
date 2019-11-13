const router = require('express').Router();
const Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const text = req.body.text;
  const date = Date.parse(req.body.date);
  const update = req.body.update;
  const lastVersions = [];
  const comments = [];

  const newRecipe = new Recipe({
    username,
    title,
    text,
    date,
    update,
    lastVersions,
    comments
  });

  newRecipe.save()
    .then(() => res.json('Recipe added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      recipe.lastVersions.push({
        username: recipe.username,
        title: recipe.title,
        text: recipe.text,
        date: recipe.date,
        edittime: req.body.edittime
      })
      recipe.update = req.body.update;
      recipe.username = req.body.username;
      recipe.title = req.body.title;
      recipe.text = req.body.text;
      recipe.date = req.body.date;

      recipe.save()
        .then(() => res.json('Recipe updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
