import db from "../config/db.js";

class Artists {
    async all(page= 1, pageSize= 10) {
        const offset = (page - 1) * pageSize;
        return await db.all("SELECT * FROM artists LIMIT ? OFFSET ?", pageSize, offset);
    }

    async create(artist) {
        if (artist && artist.name) {
            const result = await db.run("INSERT INTO artists (Name) VALUES (?)", artist.name);
            if (result && result.lastID) {
                return await this.artistById(result.lastID);
            }
        }
        return null;
    }

    async count () {
       const row = await db.get("SELECT COUNT(*) AS count FROM artists");
       return row?.count || 0;
    }

    async artistById(artistId){ 
        return await db.get("SELECT * FROM artists WHERE ArtistId = ?", artistId);
    }
}

export default new Artists();