//index as server

const express= require("express");
const mongoose=require("mongoose");
const dotenv= require("dotenv");
const helmet= require("helmet");
const morgan=require("morgan");
const gql= require("graphql-tag")
const { typeDefs, resolvers } = require('./schemas');
const {ApolloServer}=require("apollo-server")
const req = require("express/lib/request");

const app=express();

//env variables & DB connex

dotenv.config();
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>{
  console.log("Connected to MongoDB");  
});

//middleware connex
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

//const Category=require("./server/models/Categories");
// app.get("/",(req,res)=>{
//     res.send("Homepage welcome")
// })



const server= new ApolloServer({typeDefs, resolvers})
server.listen({port: 5000})
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })

