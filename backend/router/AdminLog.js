const express = require("express");
const router = new express.Router();
const { body, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = "helloitsmejanamsunuwar";

const adminLog = require("../models/Admin"); // Assuming you have a model for Admin

router.post("/AdminLog", [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        // Find the user by email in the database
        const user = await adminLog.findOne({ email });

        if (!user) {
            return res.status(400).json({ errors: "Email is not registered" });
        }

        // Compare the provided password with the hashed password stored in the database
        const isPasswordMatch = await (password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ errors: "Incorrect password" });
        }

        const data = {
            user: {
                id: user.id,
                email: email
            }
        };

        const authToken = jwt.sign(data, jwtSecret);

        res.json({ success: true, authToken: authToken });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, errors: "Server error" });
    }
});

module.exports = router;