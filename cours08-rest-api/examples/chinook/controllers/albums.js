import model from '../models/albums.js';
import { AbstractController, Response } from "./abstract.js";

class AlbumsController extends AbstractController {

    async all(req, res) {
        const page = super.currentPage(req);
        const pageSize = super.getPageSize(req);
        try {
            const count = await model.count();
            const results = await model.all(page, pageSize);
            let links = super.createLinks(req, count, page, pageSize);
            res.json(Response.ok(results, count, links));
        } catch (error) {
            res.status(505);
        }
    }

    async create(req, res) {
        const album = req?.body;
        if (album && album.title && album.artistId) {
            const result = await model.create(album);
            if (result) {
                return res.status(201).json(Response.created(result));
            }
        }
        res.status(400).json(Response.error("Données invalides pour la création de l'album."));
    }

    async albumById(req, res) {
        const albumId = req?.params?.albumId;
        if (albumId) {
            const result = await model.albumById(parseInt(albumId));
            if (result) {
                return res.json(Response.ok(result));
            }
        }
        res.json(Response.notFound("Album introuvable."));
    }
}

export default new AlbumsController();