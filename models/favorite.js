const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// A Model representing a favorite

const favoriteSchema = new Schema({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
}],
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
})

const Favorite = mongoose.model('Favorite', favoriteSchema); 

module.exports = Favorite; 