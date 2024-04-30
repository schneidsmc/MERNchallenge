const express = require('express');
const path = require('path');
const db = require('./config/connection')
const cors = require('cors');

const { authMiddleware } = require('./utils/auth');

const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema')

const PORT = process.env.PORT || 3001;
const app = express();


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  cache: 'bounded',
  context: authMiddleware
})

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/'))
})

const startApolloServer = async (typeDefs, resolvers) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql'})
}
db.once('open', () => {
  app.listen(PORT, () =>
console.log(`API Server running on port ${PORT}`));
console.log(`GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`)
}
);

startApolloServer(typeDefs, resolvers);

