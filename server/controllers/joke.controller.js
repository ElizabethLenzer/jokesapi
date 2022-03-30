const joke = require("../models.joke.model");

//find all jokes
module.exports.findAllJokes = (req, res) => {
    joke.find()
    .then(allJokes => res.json({ jokes: allJokes}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};
// find one joke
module.exports.findOneJoke = (req, res) => {
    joke.findOne({ _id: req.params.id })
    .then(oneJoke => res.json({ jokes: oneJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};
//create joke
module.exports.createJoke = (req, res) => {
    joke.create(req.body)
    .then(newJoke => res.json({ jokes: newJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};
//update joke
module.exports.updateJoke = (req, res) => {
    joke.update({ _id: req.params.id }, req.body, { new: true})
    .then(updatedJoke => res.json({ jokes: updatedJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};
//delete joke
module.exports.deleteJoke = (req, res) => {
    joke.delete({ _id: req.params.id })
    .then(result => res.json({ jokes: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};
