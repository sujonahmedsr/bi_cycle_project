import mongoose from "mongoose"
import app from "./app"
import dotenv from 'dotenv'
import { Server } from "http"
import config from "./config";

let server : Server;

async function main() {
    try {
        await mongoose.connect(config.DBURL as string);
        server = app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT} 🏃🏽‍♂️‍➡️`)
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

