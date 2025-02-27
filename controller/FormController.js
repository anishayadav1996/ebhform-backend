import db from "../config/db.js";

export const addModel = async (req, res) => {
    const { name, sign, date } = req.body;

    console.log("Received Data:", req.body); // Debugging Line

    if (!name || !sign || !date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO addmodel (name, sign, date) VALUES (?, ?, ?)";
    console.log("Executing Query:", sql, [name, sign, date]); // Debugging Line

    db.query(sql, [name, sign, date], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.json({ message: 'Data inserted successfully', id: result.insertId });
    });
};

export  const OtherIndividuals = async (req, res) => {
    const { name, sign, date } = req.body;

    console.log("Received Data:", req.body); // Debugging Line

    if (!name || !sign || !date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO addindividuals (name, sign, date) VALUES (?, ?, ?)";
    console.log("Executing Query:", sql, [name, sign, date]); // Debugging Line

    db.query(sql, [name, sign, date], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.json({ message: 'Data inserted successfully', id: result.insertId });
    });
}

export const ParentGuardian = async (req,res) => {
    const { name, sign, date } = req.body;

    console.log("Received Data:", req.body); // Debugging Line

    if (!name || !sign || !date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO parentguardian (name, sign, date) VALUES (?, ?, ?)";
    console.log("Executing Query:", sql, [name, sign, date]); // Debugging Line

    db.query(sql, [name, sign, date], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.json({ message: 'Data inserted successfully', id: result.insertId });
    });
}

export const photographer = async (req,res) => {
    const { name, sign, date } = req.body;

    console.log("Received Data:", req.body); // Debugging Line

    if (!name || !sign || !date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const sql = "INSERT INTO photographer (name, sign, date) VALUES (?, ?, ?)";
    console.log("Executing Query:", sql, [name, sign, date]); // Debugging Line

    db.query(sql, [name, sign, date], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Failed to insert data' });
        }
        res.json({ message: 'Data inserted successfully', id: result.insertId });
    });
}
