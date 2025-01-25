import mongoose from "mongoose"
import app from "./app"
import dotenv from 'dotenv'
import { Server } from "http"
dotenv.config()

const port = process.env.PORT || 3000
const databAseUrl = process.env.DBURL

let server : Server;

async function main() {
    try {
        await mongoose.connect(databAseUrl as string);
        server = app.listen(port, () => {
            console.log(`Server running on port ${port} 🏃🏽‍♂️‍➡️`)
        })
    } catch (error) {
        console.log(error);
    }
}

main()

process.on('unhandledRejection',()=>{
    console.log('unhandledRejection is detected , shutting down ...')
 if(server){
    server.close(()=>{
        process.exit(1)
    })
 }
})

process.on('uncaughtException',()=>{
console.log('uncaughtException is detected , shutting down ...')
process.exit(1)
})

