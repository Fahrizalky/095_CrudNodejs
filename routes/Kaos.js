import express, { Router } from "express";
const router = express.Router();
const kaos = [
    {
        merk: "Uniqlo",
        model: "Tshirt",
        warna: "Hitam",
        tahun: 2024,
    },
    {
        merk: "New States Apparel (NSA)",
        model: "sports",
        warna: "Putih",
        tahun: 2022,
    },
    {
        merk: "Arnold Palmer",
        model: "Tshirt",
        warna: "Hitam",
        tahun: 2020,
    },
];

router.get("/", (req, res) => {
    res.send(kaos);
});
export default router;