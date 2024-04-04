import express from 'express'

const app = express()

app.listen(5001, () => console.log("API runnig on port 5001"))

app.get('/', (req, res) => res.json("my API runnning on AWS EC2 instance"))