const cron = require("node-cron");
const axios = require("axios");
const editJsonFile = require("edit-json-file");

cron.schedule("* * * * * *", () => {
	const usersJson = editJsonFile("usersData.json");
	let indexPage = usersJson.get("indexPage") | 0;
	let userData = [];
	if (indexPage != 0) userData = usersJson.get("userData");

	console.log(userData);

	axios
		.get(`https://reqres.in/api/users?page=${indexPage + 1}`)
		.then(res => {
			console.log(res.data);
			indexPage = res.data.page;
			userData.push(...res.data.data);
			usersJson.set("indexPage", indexPage);
			usersJson.set("userData", userData);
			usersJson.save();
		})
		.catch(err => console.log(err));
});
