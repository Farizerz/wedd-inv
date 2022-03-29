import ModelRSVP from "../models/rsvp.js";

export const indexRSVP = async (req, res) => {
    await ModelRSVP.selectRSVP(req, (err, results) => {
        res.json(results);
    });
};

export const inputRSVP = async (req, res) => {
    await ModelRSVP.inputRSVP(req.body, () => {
        res.json({"message" : "Berhasil Input RSVP"});
    });
};