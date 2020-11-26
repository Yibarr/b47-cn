const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  is_active: {
    type: Boolean,
    default: true,
  },
  profile_img: {
    type: String,
    default: 'https://picsum.photos/200/300',
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
  followers: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],
}, { timestamps: true });

const User = model('Model', userSchema, 'Models');

module.exports = User;
