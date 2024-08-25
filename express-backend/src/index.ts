import express, { json } from 'express'
import { createClient } from 'redis'

const app = express()
app.use(express.json())

const client = createClient()

client.connect()

app.post('/submit', async (req,res) => {
    const {problemId, userId, code, language} = req.body
    try {
        await client.lPush("submissions", JSON.stringify({problemId, userId, code, language})) 
        res.json({
        msg: "submission received"
    })
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(3000,() => {
    console.log("Server is listening ...");
    
})