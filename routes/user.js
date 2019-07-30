const express = require("express");
const axios = require("axios");
const utils = require("../utils");

const router = new express.Router();

const originUrl = "https://reqres.in";
router.get("/:id", (req, res) => {
	const id = req.params.id;

	axios
		.get(`${originUrl}/api/users/${id}`)
		.then(response => {
			console.log(response.data.data);
			res.status(200).send(response.data.data);
		})
		.catch(error => res.status(401).send(error));
});

router.get("/:id/avatar", async (req, res) => {
	const id = req.params.id;

	const base64Data = await utils.checkImageExisted(id);

	if (base64Data) {
		res.status(200).send(base64Data);
	} else {
		axios
			.get(`${originUrl}/api/users/${id}`)
			.then(async response => {
				const { avatar } = response.data.data;
				const savedImageData = await utils.saveImageToDisk(avatar, `${id}.png`);
				res.status(200).send(savedImageData);
			})
			.catch(error => res.status(401).send(error));
	}
});

router.delete("/:id/avatar", async (req, res) => {
	const id = req.params.id;
	try {
		await utils.deleteimageByID(id);
		res.status(200).send(`Successfully deleted user${id} image`);
	} catch (e) {
		res.status(400).send("Can't find the avatar image");
	}
});

module.exports = router;
