import 'module-alias/register';
import { ExpressServer } from './server';
import { shortenedUrlRoute } from "@src/main/router/v1";
import config from "@src/main/config";
import { ShortenedUrlPostgresGateway } from "@src/infrastructure/db/postgres"
import { RemoveShortenedUrl } from "@domain/usercase"
import { sequelize } from "@src/main/model";


// conexão com o banco Postgres

sequelize.authenticate().then(() => {
    console.log('Conexão foi um sucesso com POSTGRES!!');
}).catch((error) => {
    console.error('Não foi possivel se conectar!!', error);
});

const server = new ExpressServer(config.SERVER_PORT);

server.addRoutes('', shortenedUrlRoute);

// starta o servidor express

server.start();


// processo: limpeza no banco, remove url geradas a um certo periodo de tempo definido 
const removeShortenedUrl = new RemoveShortenedUrl(new ShortenedUrlPostgresGateway())

setInterval(() => {
    removeShortenedUrl.removeByTime(config.BD_CLEANING_TIME.T1M).then((res) => {
        console.log("REM : ", res);
    });
}, config.BD_CLEANING_TIME.T1M);



