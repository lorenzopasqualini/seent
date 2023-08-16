require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
	const { username } = req.body;

	try {
		const rsp = await axios.put(
			'https://api.chatengine.io/users/',
			{ username: username, secret: username, first_name: username },
			{ headers: { 'private-key': process.env.PRIVATE_KEY } }
		);

		return res.status(rsp.status).json(rsp.data);
	} catch (err) {
		return res.status(err.response.status).json(err.response.data);
	}
});

app.listen(3001);
