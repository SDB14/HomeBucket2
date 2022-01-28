const Category = require("../models/Category");


module.exports={
  Query:{
      async getCats(){
          try{
              const categories= await Category.find();
              return categories;

          } catch (err) {
              throw new Error (err);
          }
      }
  }
}
