const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const User = model('Model', userSchema, 'Models');

module.exports = User;
