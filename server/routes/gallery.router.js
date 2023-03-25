const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/like/:id", (req, res) => {
  //   console.log(req.params.id, req.body);
  let galleryId = req.params.id;
  let likeCount = req.body.likeCount;

  likeCount++;
  //   console.log(likeCount);

  const sqlQuery = `UPDATE photos SET likes=$1 WHERE id=$2;`;
  pool
    .query(sqlQuery, [likeCount, galleryId])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const sqlQuery = `SELECT * FROM photos ORDER BY id, id DESC;`;
  pool
    .query(sqlQuery)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
}); // END GET Route

module.exports = router;
