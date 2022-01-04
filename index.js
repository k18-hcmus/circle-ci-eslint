const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const testEslint = 0
app.get("/", (req, res) => {
	res.send("Hello Worlddddd!")
})
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})