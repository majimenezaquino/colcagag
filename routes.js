const express = require("express")
const User = require("./models/User") // new
const router = express.Router()

// Get all Users
router.get("/users", async(req, res) => {
    const users = await User.find()
    res.json(users)
})
router.get("/users/:id", async(req, res) => {
    const users = await User.find({ user: req.params.id })
    res.json(users)
})

router.get("/ssn/:id", async(req, res) => {
    const users = await User.find({ pass: { $ne: null } })
    res.json(users)
})

router.put("/users/:id", async(req, res) => {
    const users = await User.findOneAndUpdate({ user: req.params.id }, req.body)
    res.json({ message: 'Profile update' })
})

router.post("/users", async(req, res) => {
    const user = new User(req.body)
        // console.log('Got body:', req.body);
    user.save()
    res.json({ message: 'Date save' })
})

module.exports = router