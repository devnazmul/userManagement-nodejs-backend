const mongoose = require("mongoose");
require('dotenv').config();

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@cluster0.gu8bj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, connectionParams)
		.then(() => {
			console.log("Connected to database successfully");
		})
		.catch((err) => {
			console.log('db Error');
		})
}
