const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    trim: true
  },
  password: {
    type: String,
    require: true,
    trim: true
  },
  avatar: {
    type: String
  },
  joinDat: {
    type: Date,
    required: true,
    ref: 'Post'
  },
  favorites: {
    type: [mongoose.Schema.Types.ObjectId],
    require: true,
    ref: 'Post'
  }
})

module.exports = mongoose.model('User', UserSchema)