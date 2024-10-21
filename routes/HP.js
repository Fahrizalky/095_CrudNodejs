import express, { Router } from "express";
const router = express.Router();
const hp = [
    {
        merk: "Samsung",
        model: "Elegan",
        warna: "Hitam",
        tahun: 2021,
    },
    {
        merk: "Iphone 16 PM",
        model: "Kelas Atas",
        warna: "Blue Titanium",
        tahun: 2024,
    },
];

router.get("/", (req, res) => {
    res.send(hp);
});
export default router;