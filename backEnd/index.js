import './util/config.js'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import multer from 'multer'
import cloudinary from 'cloudinary'
import { cloudinaryConfig } from './util/cloudinary.js'
import { getDb } from './util/db.js'
import { ObjectId } from 'mongodb'
import mongodb from 'mongodb'
import Joi from 'joi'


const BACKEND_PORT = process.env.BACKEND_PORT
const app = express()

app.use(morgan('dev')) // logger

const CORS_WHITELIST = process.env.CORS_WHITELIST
app.use(cors({
    origin: (origin, cb) => {
        if (CORS_WHITELIST.indexOf(origin) !== -1) {
            cb(null, true)
        }
        else {
            cb(new Error(`Nicht erlaubt durch CORS, nicht auf WHITELIST `))
        }
    }
}))

// CORS Error Fangen Middleware
app.use((err, req, res, next) => {
    console.log(err.message)
    console.log(err.stack)
    if (err) {
        res.status(500).json({ message: `CORS Fehler gefangen: -->599 ${err.message}` })
    }
    else {
        next()
    }
})


app.use(express.json()) // Body Parser




// Server Starten
app.listen(BACKEND_PORT, () => {
console.log(`Server läuft auf Port: ${BACKEND_PORT}`)
})
// zum suchen ob Ports belegt: lsof -i :Portnummer
// zum killen: kill -9 PID-Nummer