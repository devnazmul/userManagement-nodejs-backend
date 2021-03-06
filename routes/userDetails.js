const mongoose = require("mongoose");
const router = require("express").Router();
const cors = require("cors");


router.use(cors());


const moonSchema = new mongoose.Schema({
    username: String,
    mobile: Number,
    email: String,
    address: String
});

let moon = mongoose.model('AdminAddedUser', moonSchema);

router.post('/', async (req, res) => {

    // let myData = new moon(req.body)

    try {
        const user = await moon.findOne({ username: req.body.username });
        const user1 = await moon.findOne({ mobile: req.body.mobile });
        const user2 = await moon.findOne({ email: req.body.email });
        if (user)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" });
        if (user1)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" });
        if (user2)
            return res
                .status(409)
                .send({ message: "User with given email already Exist!" });

        await new moon({ ...req.body }).save();
        res.status(201).send({ message: "User created successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});


router.get('/', (req, res) => {
    moon.find({}, function (error, data) {
        res.send(data)
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    moon.findOneAndDelete({ _id: id }, function (err) {
        if (err) res.status(500).send({ message: "Internal Server Error" });
        res.status(201).send({ message: "UserDetails Delet successfully" })
    });
})



module.exports = router;