import express from 'express';
import bodyParser from "body-parser";
import { AddShortenedUrlController, GetShortenedUrlController } from "@src/delivery/controller/shortenedUrl";
import { ShortenedUrlPostgresGateway } from "@src/infrastructure/db/postgres";
import { adaptRoute } from "../../adapter";

const jsonParser = bodyParser.json();

const router = express.Router();

// rotas express para endpoints da API 

/* gera nova url curta */
router.post('/encurtador', jsonParser, adaptRoute(new AddShortenedUrlController(new ShortenedUrlPostgresGateway())));
/* recupera a url original */
router.get('/:id?', jsonParser, adaptRoute(new GetShortenedUrlController(new ShortenedUrlPostgresGateway())));

export const shortenedUrlRoute = router;
