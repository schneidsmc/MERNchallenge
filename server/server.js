const express = require('express');
const path = require('path');
const db = require('./config/connection')
const cors = require('cors');

const { authMiddleware } = require('./utils/auth');

const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema')

const app = express();
const PORT = process.env.PORT || 3001;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  instrospection: true,
  cache: 'bounded',
  context: authMiddleware
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(_dirname, '../client/build')))
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


// const express = require('express');
// const path = require('path');
// const db = require('./config/connection');
// const routes = require('./routes');

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
