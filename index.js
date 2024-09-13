const express = require('express')
const app = express()
const mongoose = require('mongoose')

const mn_url="mongodb://127.0.0.1:27017/rentlelo";
const Listing=require("../project1/models/listing.js")

main().then(()=>{
    console.log("mongodb connected")
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect(mn_url)
    
}


app.get("/home",(req,res)=>{
    res.send("hello welcome")
    
})

app.get("/testListing", async (req,res)=>{
  let sampleListing = new Listing({
    title: "my vila",
    description: "it is good",
    price:1200,
    location:"kanpur",
    country:"india"
  })

  await sampleListing.save()
  console.log("sample saved")
  res.send("sucessful")



})

app.listen(8080,()=>{
    console.log('listening on port 8080')

})