const { Schema, model } = require('mongoose');

const PushRequestSchema = new Schema(
	{
		user: { type: String, required: true },
		file: { type: String, required: true },
		status: { type: String, required: true, default: 'pending' },
	},
	{ timestamps: true }
);

const PushRequest = model('PushRequest', PushRequestSchema);

module.exports = PushRequest;
