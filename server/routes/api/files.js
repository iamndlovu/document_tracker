const router = require('express').Router();
let File = require('../../models/File.model');

router.route('/').get(async (req, res) => {
	try {
		const files = await File.find();
		res.json(files);
	} catch (err) {
		res.status(400).json('Error: ' + err);
	}
});

router.route('/:id').get((req, res) => {
	File.findById(req.params.id)
		.then(file => {
			if (file) res.json(file);
			else {
				res.status(400).json('Error: file not found');
			}
		})
		.catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
	const { name, category, description, type, owner } = req.body;

	let file = {
		name,
		category,
		description,
		tags: [],
		type,
		owner,
	};

	// if files present
	if (!(req.files === null)) {
		const actualFile = req.files.file;

		if (actualFile != null) {
			actualFile.mv(
				`${__dirname}/../../public/uploads/files/${
					file.name
				}.${file.type.toLowerCase()}`,
				err => {
					if (err) {
						console.error(err);
						return res.status(500).send(err);
					}
				}
			);
		}
		file.path = `/uploads/files/${file.name}.${file.type.toLowerCase()}`;
	} else res.status(400).json({ msg: 'No file uploaded' });

	const newFile = new File(file);

	newFile
		.save()
		.then(() => res.json(newFile))
		.catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/:id').delete((req, res) => {
	File.findByIdAndDelete(req.params.id)
		.then(() => res.json('File deleted'))
		.catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').post((req, res) => {
	File.findById(req.params.id)
		.then(file => {
			// if files present
			if (!(req.files === null)) {
				const actualFile = req.files.file;

				if (actualFile != null) {
					actualFile.mv(`${__dirname}/../../public/${file.path}`, err => {
						if (err) {
							console.error(err);
							return res.status(500).send(err);
						}
					});
				} else {
					return res.status(400).json(`Error: No files uploaded`);
				}

				file.history = [...file.history, req.body.commit];
				file
					.save()
					.then(() => res.json(file))
					.catch(err => res.status(400).json(`Error: ${err}`));
			} else {
				return res.status(400).json(`Error: No files uploaded`);
			}
		})
		.catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/history/:id').post((req, res) => {
	File.findById(req.params.id)
		.then(file => {
			file.history = [...file.history, req.body.commit];
			file
				.save()
				.then(() => res.json(file))
				.catch(err => res.status(400).json(`Error: ${err}`));
		})
		.catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
