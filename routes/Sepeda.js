import express, { Router } from "express";
const router = express.Router();
const sepeda = [
    {
        merk: "Polygon",
        model: "",
        warna: "Abi-abu",
        tahun: 2021,
    },
    {
        merk: "Fixie",
        model: "Minimalis",
        warna: "Hijau",
        tahun: 2024,
    },
];

router.get("/", (req, res) => {
    res.send(sepeda);
});
export default router;