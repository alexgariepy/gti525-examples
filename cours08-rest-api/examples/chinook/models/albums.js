import db from "../config/db.js";

class Albums {
    async all(page= 1, pageSize= 10) {
        const offset = (page - 1) * pageSize;
        return await db.all("SELECT * FROM albums LIMIT ? OFFSET ?", pageSize, offset);
    }

    async count () {
       const row = await db.get("SELECT COUNT(*) AS count FROM albums");
       return row?.count || 0;
    }

    async albumById(albumId){
        return await db.get("SELECT * FROM albums WHERE AlbumId = ?", albumId);
    }

    async create(album) {
        if (album && album.title && album.artistId) {
            const result = await db.run("INSERT INTO albums (Title, ArtistId) VALUES (?, ?)", album.title, album.artistId);
            if (result && result.lastID) {
                return await this.albumById(result.lastID);
            }
        }
        return null;
    }
}

export default new Albums();