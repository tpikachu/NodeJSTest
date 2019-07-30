const fs = require("fs");
const https = require("https");

const saveImageToDisk = (url, filePath) => {
	return new Promise((resolve, reject) => {
		const file = fs.createWriteStream(`AvatarImages/${filePath}`);
		https.get(url, response => {
			const stream = response.pipe(file);
			stream.on("finish", () => {
				console.log("file end");
				resolve(imageEncodeBase64(`AvatarImages/${filePath}`));
			});
		});
	});
};

const checkImageExisted = filePath => {
	return new Promise(async (resolve, reject) => {
		fs.access(`AvatarImages/${filePath}.png`, fs.F_OK, err => {
			if (err) {
				resolve(null);
			} else {
				resolve(imageEncodeBase64(`AvatarImages/${filePath}.png`));
			}
		});
	});
};

const deleteimageByID = filePath => {
	return new Promise(async (resolve, reject) => {
		fs.access(`AvatarImages/${filePath}.png`, fs.F_OK, err => {
			if (err) {
				reject(err);
			} else {
				fs.unlink(`AvatarImages/${filePath}.png`, err => {
					if (err) {
						reject(err);
					}
					resolve();
				});
			}
		});
	});
};

const imageEncodeBase64 = filePath => {
	const image = fs.readFileSync(filePath);
	console.log("I'm from image encode", image);
	return image.toString("base64");
};
module.exports = { saveImageToDisk, checkImageExisted, deleteimageByID };
