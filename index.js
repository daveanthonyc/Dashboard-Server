/* IMPORTS */
import express from 'express'
import env from 'dotenv'
import { router } from './routes/general.js'
import mongoose from 'mongoose'
import cors from 'cors'

/* CONFIG */
env.config()
const app = express()
app.use(cors())
app.use('/', router)

mongoose.connect(process.env.MONGDODB_URI)

app.listen(process.env.PORT, () => {
    console.log(`Server now listening on port: ${process.env.PORT}`)
}) 