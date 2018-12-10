const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'type-defs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8')

const User = require('./models/User')
const Post = require('./models/Post')

mongoose.set('useCreateIndex', true)
mongoose
  .connect(
    'mongodb://admin:warlyware1@ds139362.mlab.com:39362/vue-graph-ql',
    { useNewUrlParser: true }
  )
  .then(() => console.log('db connected'))
  .catch(err => console.error(err))

const todos = [
  { task: 'Wash car', completed: true },
  { task: 'Eat food', completed: false }
]

const resolvers = {
  Query: {
    getTodos: () => todos
  }
}

const server = new ApolloServer({
  typeDefs,
  context: {
    User,
    Post
  }
})

server.listen().then(({ url }) => console.log(`server listening ${url}`))
