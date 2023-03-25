import { useState, useEffect } from 'react';
import axios from "axios"

import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList() {
    // useState 
    // create state component to hold the gallery list from the server/database 
    const [galleryList, setGalleryList] = useState([]);
    // useEffect to call initial get 
    useEffect(() => { getGallery() }, []);
    // HTTP GET request
    // Function to GET the gallery from the server via axios 
    // use GET to update the state held in the variable galleryList
    function getGallery() {
        axios.get('/gallery').then((response) => {
            console.log("Successful GET", response.data);
            setGalleryList(response.data);
        }).catch((err) => {
            console.log("Error with GET:", err);
        })
    }

    return (
        <div>
            <h2>Lily's Photo Gallery</h2>
            {galleryList.map((listItem) => (
                <GalleryItem key={listItem.id} listItem={listItem} getGallery={getGallery} />
            ))
            }

        </div >
    )

}

export default GalleryList;