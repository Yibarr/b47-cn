const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

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
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  following: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'posts' }],
}, { timestamps: true });

// eslint-disable-next-line prefer-arrow-callback
// eslint-disable-next-line func-names
// eslint-disable-next-line consistent-return
userSchema.pre('save', async function (next) {
  try {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    return next();
  } catch (error) {
    next(error);
  }
});

const User = model('User', userSchema, 'Users');

module.exports = User;
