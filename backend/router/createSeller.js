const express = require("express");
const router = new express.Router();

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "helloitsmejanamsunuwar";

// importing module userlog in router
const sellerLog = require("../models/Seller");
//for register user
router.post("/createSeller",
    body("name").isLength({ min: 2 }).withMessage("must contain more than 1 letter"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 8 }).withMessage('must be more than 8')
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        //for hasing method
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);
        //storing the data of sellers
        try {
            // await userLog.create({   

            const user = new sellerLog({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                address: req.body.address,
                snumber: req.body.snumber
            });
            const userLogin = await user.save();
            // res.status(201).send(userLogin);
            res.json({success:true});
        } catch (err) {
            // res.status(400).send(err);
            res.json({success:false});
            console.log(err);
        }
    })
//for login user
router.post("/loginSeller", async (req, res) => {
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 8 }).withMessage('must be more than 8')
    let email = req.body.email;

    // const userEmail = email;
    // console.log(userEmail)
    
    //session -sotring user email 
    // req.session.email = email;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }
    try {
        const user = sellerLog;
        let userData = await user.findOne({email });
        if (!userData) {
            return res.status(400).send({ errors: "email was not register" });
        }
        let comPassword = await bcrypt.compare(req.body.password,userData.password);
        if (!comPassword) {
            return res.send({ errors: "incorrect password" });
        }
        const data = {
            user: {
                id:userData.id,
                email: email
            }
        }
        const authToken = jwt.sign(data, jwtSecret)
        res.json({ success: true, authToken: authToken })
    } catch (err) {
        console.log(err)
        res.json({ success: false })

    }
})

module.exports = router;