const { Schema, model } = require('mongoose');

const FileSchema = new Schema(
	{
		name: { type: String, required: true },
		category: { type: String, required: true },
		description: { type: String, required: true },
		tags: { type: Array },
		type: { type: String, required: true },
		actualFile: { type: Buffer, required: true },
		history: { type: Array },
	},
	{ timestamps: true }
);

const File = model('File', FileSchema);

module.exports = File;
