const mongoose = require('mongoose');
const express = require('express');
const app = express();
const customerModel = require('./customerModel');
const port = 3000;
mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useUnifiedTopology: true });



app.get("/add", (req, res, next) => {
    const phNo_regex = /^[6-9]\d{10}$/;
    var name_regex = /^[a-zA-Z ]{2,30}$/;
    var name2 = req.query.name;
    var name = JSON.stringify(req.query.name);
    var ph = parseInt(req.query.phone);

    if (name_regex.test(name2)) {
        if (phNo_regex.test(ph)) {
            customerModel.find({ phone: ph }, (err, data) => {
                if (err) console.warn(err)
                if (data.length) {
                    res.json({ message: "Phone number already exist" })
                }
                else {
                    var customerDetails = new customerModel({
                        name: name,
                        phone: ph
                    })
                    customerDetails.save().then(data => {
                        res.status(201).json({
                            massage: "Customer inserted successfully",
                            result: data
                        })
                    })
                }
            })
        } else {
            res.json({ message: "Invalid phone number" })
        }
    } else {
        res.json({ message: "Invalid name" })
    }


})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})