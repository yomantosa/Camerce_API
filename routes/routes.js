const express = require('express');
const User = require('../models/userModel');
const Products = require('../models/productModel');
const router = express.Router();
var bodyParser = require('body-parser');
const { json } = require('body-parser');
const userModel = require('../models/userModel');
const productModel = require('../models/productModel');
const slideshowModel = require('../models/SlideshowModel');
const cateModel = require('../models/cateModel');


var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = router;

// USER

router.post('/user/post',jsonParser, async (req, res) => {
    const data = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

// DELETE USER
router.delete('/user/delete/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.firstname}  ${data.lastname} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//Update by ID Method
router.patch('/user/update/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});
//getAll
router.get('/user/getAll',jsonParser, async (req, res) => {
    userModel.find((err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
            console.log(val);
        }
    })
});

//getbyID
router.get('/user/get/:id',jsonParser, async (req, res) => {
    userModel.findById(req.params.id,(err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
            console.log(val);
        }
    })
});



//PRODUCT


router.post('/product/post',jsonParser, async (req, res) => {
    const data = new Products({
        productname: req.body.productname,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price,
        picDir: req.body.picDir,
        quantity :req.body.quantity

    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});
router.delete('/prduct/delete/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Products.findByIdAndDelete(id)
        res.send(`Document with ${data.firstname}  ${data.lastname} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});

//Update by ID Method
router.patch('/product/update/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Products.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});
//getAll
router.get('/product/getAll',jsonParser, async (req, res) => {
    productModel.find((err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
        }
    })
});

//getAll
router.get('/product/get/:id',jsonParser, async (req, res) => {
    productModel.findById(req.params.id,(err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
            console.log(val);
        }
    })
});


// CATEGORY

router.post('/cate/post',jsonParser, async (req, res) => {
    const data = new cateModel({
        productID: req.body.productID
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});
router.delete('/cate/delete/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await cateModel.findByIdAndDelete(id)
        res.send(`Document with ${data.id}  ${data.lastname} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//Update by ID Method
router.patch('/cate/update/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await cateModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});
//getAll
router.get('/cate/getAll',jsonParser, async (req, res) => {
    cateModel.find((err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
            console.log(val);
        }
    })
});

//getbyID
router.get('/cate/get/:id',jsonParser, async (req, res) => {
    cateModel.findById(req.params.id,(err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
            console.log(val);
        }
    })
});

//slideshow

router.post('/slideshow/post',jsonParser, async (req, res) => {
    const data = new Slideshow({
        title: req.body.title,
        picDir: req.body.picDir,
        detail: req.body.detail,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

// DELETE slideshow
router.delete('/slideshow/delete/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Slideshow.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});


//Update by ID Method
router.patch('/slideshow/update/:id',jsonParser, async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Slideshow.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
});
//getAll
router.get('/slideshow/getAll',jsonParser, async (req, res) => {
    slideshowModel.find((err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
            console.log(val);
        }
    })
});

//getbyID
router.get('/slideshow/get/:id',jsonParser, async (req, res) => {
    slideshowModel.findById(req.params.id,(err,val)=>{
        if(err){
            console.log(err);

        }else{
            res.json(val);
            console.log(val);
        }
    })
});