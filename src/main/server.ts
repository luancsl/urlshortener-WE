import ExpressApp from 'express';
import { Router, Express } from 'express';

export class ExpressServer {

    private app: Express
    private port: any

    constructor(port: any) {
        this.app = ExpressApp();
        this.port = port;
    }

    start(): void {
        this.app.listen(this.port, () => {
            console.log("iniciada na porta: ", this.port);
        });
        
    }

    addRoutes(src: string, router: Router) {
        this.app.use(src, router);
    }

    getApp(): Express {
        return this.app;
    }
}





