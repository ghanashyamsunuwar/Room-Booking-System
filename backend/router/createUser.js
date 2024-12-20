const express = require("express");
const router = new express.Router();

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "helloitsmejanamsunuwar";

// importing module userlog in router
const userLog = require("../models/userLogin");
//for register user
router.post("/createUser",
    body("name").isLength({ min: 2 }).withMessage("must contain more than 1 letter"),
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 8 }).withMessage('must be more than 8')
    , async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
        }
        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password, salt);
        try {
            // await userLog.create({   

            const user = new userLog({
                name: req.body.name,
                email: req.body.email,
                password: secPassword,
                address: req.body.address,
                number:req.body.number
            });
            const userLogin = await user.save();
            // res.status(201).send(userLogin);
            res.json({success:true});
        } catch (err) {
            // res.status(400).send(err);
            res.json({success:false});
        }
    })

//for login user
router.post("/loginUser", async (req, res) => {
        body("email").isEmail().withMessage("Invalid Email"),
        body("password").isLength({ min: 8 }).withMessage('must be more than 8')
    let email = req.body.email;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }
    try {
        const user = userLog;
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