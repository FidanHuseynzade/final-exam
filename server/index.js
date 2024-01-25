const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { Schema, default: mongoose } = require("mongoose")
const app = express()
app.use(cors())
app.use(bodyParser.json())

const port =3030

const flowerSchema = new Schema({
    name: String,
    image: String,
    price: Number
})

const Flower = mongoose.model("flower", flowerSchema)

app.get("/flower", async(req,res)=>{
    const getFlower = await Flower.find()
    res.send(getFlower)
})

app.get("/flower/:id", async (req,res)=>{
    const {id} = req.params
    const getById = await Flower.findById(id)
    res.send(getById)
})

app.post("/flower", async(req,res)=>{
    const {name, image, price} = req.body
    const newFlower = new Flower({
        name:name,
        image:image,
        price:price
    })
    const postFlower = await newFlower.save()
    res.send(postFlower)
})

app.delete("/flower/:id", async(req,res)=>{
    const {id} = req.params
    const deleteFlower = await Flower.findByIdAndDelete(id)
    res.send(deleteFlower)
})

app.listen(3030, ()=>{console.log(`app listening on port ${port}`)})

mongoose.connect("mongodb+srv://fidan:fidan123@app.shr68vn.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("connected to mongodb")})