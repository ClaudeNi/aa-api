const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
	return "test";
});

app.listen(PORT, () => console.log(`Started on PORT ${PORT}`));
