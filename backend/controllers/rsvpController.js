import ModelRSVP from "../models/rsvp.js";

export const indexRSVP = async (req, res) => {
    await ModelRSVP.selectRSVP(req, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

export const inputRSVP = async (req, res) => {
    await ModelRSVP.inputRSVP(req.body, (err, results) => {
        if (err) throw err;
        res.json({"message" : "Berhasil Input RSVP"});
    });
};