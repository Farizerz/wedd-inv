import db from '../config/db.js';

const ModelGB = {
    selectGuestbook(data, callback) {
        try {
            db.query(`SELECT * FROM guestbook`, callback);
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
            console.error(err.message);
        }
    }
}

export default ModelGB;