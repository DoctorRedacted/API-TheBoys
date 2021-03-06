import { Router } from "express";
import { deleteheroe, inserheroe, voador, showing} from "../repository/heroiRepository.js";

const server = Router();

server.get('/heroi', async (req, resp) => {
    const send = await showing();
    resp.send(send);
})

server.post('/heroi', async (req, resp) => {
    const get = req.body;
    const send = await inserheroe(get);
    resp.status(204).send();
})

server.delete('/heroi/:id', async (req, resp) => {
    const id = req.params.id;
    const snd = deleteheroe(id);
    resp.status(204).send();
})

server.post('/heroi/filtro', async (req, resp) => {
    try {
        const voa = req.body;
        const snd = await voador(voa);
        resp.send(snd);
    } catch (err) {
        resp.send(err.message);
    }
})
export default server;