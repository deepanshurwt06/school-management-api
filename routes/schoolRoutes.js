const express = require("express");
const router = express.Router();
const sql = require("../db");

// post / add school 
router.post("/addSchool" , async(req, res) => {
    const {name, address, latitude, longitude } = req.body;

    if(!name || !address || !latitude || !longitude) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try{
        await sql`INSERT INTO schools (name, address, latitude, longitude) 
        VALUES (${name}, ${address}, ${latitude}, ${longitude})`;
        
        res.status(201).json({ message: "School added successfully" });
    }catch(error){
        console.error("Error adding school",error);
        res.status(500).json({ error: "Failed to add school" });
    }
})

// get listing schools 
router.get("/listSchools" , async(req, res) => {
    const{lat, lng} = req.query;

    if(!lat || !lng) {
        return res.status(400).json({ error: "Latitude and Longitude are required" });
    }
    try{
        const school = await sql`SELECT * FROM schools `;
        const userLat = parseFloat(lat);
        const userLng = parseFloat(lng);

    const SchoolDistance = school.map((school) => {
        const distance = Math.sqrt(
            Math.pow(userLat - school.latitude, 2) +
            Math.pow(userLng - school.longitude, 2)
        );
        return {
            ...school,
            distance
        };
    });

    SchoolDistance.sort((a,b) => a.distance - b.distance);
    res.json(SchoolDistance);
    }catch(error){
        console.error("Error fetching schools", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;