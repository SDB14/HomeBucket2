const {Category} = require("../models") 

const categoryList = [{type: "Accessories", description: "Accessories"}, {type: "Appeliences", description: "Appeliences"}, {type:"Books", description: "Books"}, {type:"Cosmetics", description: "Cosmetics"}, {type:"Clothes", description: "Clothes"}, {type:"Shoes", description: "Shoes"}, {type:"Jelewely", description: "Jelewely"}]

Category.collection.drop()
const seed = categoryList.forEach(async category => {
    const cat = new Category(category)
    await cat.save()
})

module.exports = seed