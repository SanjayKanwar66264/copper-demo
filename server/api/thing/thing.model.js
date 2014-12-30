'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
    name: String,
    info: String,
    active: Boolean,
    title: String,
    contact: String
});

module.exports = mongoose.model('Thing', ThingSchema);