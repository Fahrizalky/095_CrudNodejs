import express, { Router } from "express";
const router = express.Router();
const sepatu = [
    {
        merk: "Adidas",
        model: "Sports",
        warna: "Hitam",
        tahun: 2022,
    },
    {
        merk: "Vans",
        model: "Running",
        warna: "Putih",
        tahun: 2021,
    },
    {
        merk: "Sneakers",
        model: "Harian",
        warna: "Abu-abu",
        tahun: 2024,
    },
];

router.get("/", (req, res) => {
    res.send(sepatu);
});
export default router;