-- create db
CREATE DATABASE "react_gallery";
-- create table
CREATE TABLE "photos"(
    "id" serial primary key,
    "path" varchar(300) NOT NULL,
    "description" varchar(300) NOT NULL,
    "likes" INTEGER NOT NULL
);
-- data
INSERT INTO "photos"("path", "description", "likes")
VALUES (
        'images/goat_small.jpg',
        'Photo of a goat taken at Glacier National Park.',
        0
    ),
    (
        'images/crosscountryski.JPG',
        'Jean-Luc getting ready to cross-country ski.',
        0
    ),
    (
        'images/newcar.JPG',
        'Bought a cute blue Subaru!',
        0
    ),
    (
        'images/playinginsnow.JPG',
        'JL and I playing in the snow during a Breckenridge snow day.',
        0
    ),
    (
        'images/southshore.JPG',
        'JL and I on the south shore of Lake Superior.',
        0
    );
-- test GET query
SELECT *
FROM photos
ORDER BY id,
    id DESC;
-- test PUT query
UPDATE photos
SET likes = 1
WHERE id = 2;
-- test POST query
-- test DELETE query