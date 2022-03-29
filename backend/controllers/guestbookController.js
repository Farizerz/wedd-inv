import ModelGB from "../models/guestbook.js";

export const indexGB = async (req, res) => {
    await ModelGB.selectGuestbook(req, (err, results) => {
        res.json(results);
    });
};

export const inputGB = async (req, res) => {
    await ModelGB.inputGuestbook(req.body, () => {
        res.json({"message" : "Berhasil Input Guestbook"});
    });
};