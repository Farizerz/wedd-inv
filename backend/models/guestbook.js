import db from '../config/db.js';

const ModelGB = {
    selectGuestbook(data, callback) {
        try {
            db.query(`SELECT * FROM guestbook ORDER BY id desc`, callback);
        } catch (err) {
            console.error(err.message);
        }
    },

    inputGuestbook(data, callback) {
        try {
            db.query(`INSERT INTO guestbook
                        (nama, komentar) 
                        VALUES 
                        ("${data.nama}", "${data.komentar}")`, callback);
        } catch (err) {
            console.error("Error dari model: " + err.message);
        }
    }
}

export default ModelGB;