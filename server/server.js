const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
//const db = require('./config/connection');
const mongoose = require('mongoose');

//EXPRESS SERVER
const app = express();
const PORT = process.env.PORT || 3001;

//APOLLO SERVER
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware
// });

  async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/homebucket', { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
 
    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
    console.log("Connected to MongoDB"); 
});
})
}

startApolloServer(typeDefs, resolvers);
//server.applyMiddleware({ app });

//middleware parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.use(routes);
 
//get all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server running on port ${PORT}!`);
//     console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
//   });
// });
