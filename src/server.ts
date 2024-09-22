import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'

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

server.use(express.json())

server.use('/api/activities', router)

export default server