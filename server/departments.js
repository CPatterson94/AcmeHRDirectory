const express = require("express");
const router = express.Router();
const pg = require("pg");

const client = new pg.Client("postgres://localhost/acme_directory_db");
client.connect();

// get all departments
router.get("/", async (req, res, next) => {
  try {
    const response = await client.query(
      `SELECT * FROM departments ORDER BY id ASC`
    );
    res.send(response.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
