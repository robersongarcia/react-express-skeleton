import e from "express"
import cors from "cors"
import testRouter from "../routes/test.js"
import ViteExpress from "vite-express";

export class Server {
    constructor() {
        this.app = new e()
        // eslint-disable-next-line no-undef
        this.port = process.env.PORT || 3000
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(e.json())
    }

    routes() {
        this.app.use("/api/test", testRouter )
    }

    listen() {
        ViteExpress.config({            
            // eslint-disable-next-line no-undef
            mode: process.env.NODE_ENV || 'development',
        })
        ViteExpress.listen(this.app, this.port, () => console.log(`Server is listening on port: ${this.port}...`))        
    }
}