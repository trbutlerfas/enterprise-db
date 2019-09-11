const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://enterprise:Z6iVfD6EDvkKK8WhpcERTceij6@enterprise-afhfw.mongodb.net/enterprise_vendors?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
});
