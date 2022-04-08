import db from '../config/db.js';

const ModelRSVP = {
    selectRSVP(data, callback) {
        try {
            db.query(`SELECT * FROM rsvp`, callback);
        } catch (err) {
            console.error(err.message);
        }
    },

    inputRSVP(data, callback) {
        try {
            db.query(`INSERT INTO rsvp
                        (nama, alamat, status) 
                        VALUES 
                        ("${data.nama}", "${data.alamat}", "${data.status}")`, callback);
        } catch (err) {
            console.error(err.message);
        }
    }
};

export default ModelRSVP;