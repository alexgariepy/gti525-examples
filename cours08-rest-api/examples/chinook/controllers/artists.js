import model from '../models/artists.js';
import { AbstractController, Response } from "./abstract.js";

class ArtistsController extends AbstractController {

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
        const artist = req?.body;
        if (artist && artist.name) {
            const result = await model.create(artist);
            if (result) {
                return res.json(Response.created(result));
            }
        }
        res.status(400).json(Response.error("Données invalides pour la création de l'artiste."));
    }

    async artistById(req, res) {
        const artistId = req?.params?.artistId;
        if (artistId) {
            const result = await model.artistById(parseInt(artistId));
            if (result) {
                return res.json(Response.ok(result));
            }
        }
        res.json(Response.notFound("Artiste introuvable."));
    }
}

export default new ArtistsController();