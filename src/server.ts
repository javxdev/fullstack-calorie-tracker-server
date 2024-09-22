import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'
import cors, { CorsOptions } from 'cors'

const server = express()    

export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
    } catch (error) {
        console.log( colors.bgRed(' DB Connection Failed '));
    }
}
connectDB()

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if(origin === process.env.FRONTEND_URL){
            callback(null, true)
        } else {
            callback(new Error('CORS ERROR!'))
        }
    }
}

server.use(cors(corsOptions))

server.use(express.json())

server.use('/api/activities', router)

export default server