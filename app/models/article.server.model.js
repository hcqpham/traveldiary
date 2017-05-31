'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Article Schema - This is the basis of how user data is stored in the DB
 */
var ArticleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank. Input title then try again.'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	lat:{
		type: Number,
		default: 0,
		trim: true
	},
	lon:{
		type: Number,
		default: 0,
		trim: true
	},
	city: {
		type: String,
		default: '',
		trim: true
	},
	category: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
ArticleSchema.index({location: '2dsphere'});

//Sets the mongoDB collection to be used as "Article"
mongoose.model('Article', ArticleSchema);
