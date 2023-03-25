import { useState } from "react";
import axios from 'axios';

function GalleryItem({ listItem, getGallery }) {
    console.log(
        "this is listItem:", listItem
    );
    const [toggle, setToggle] = useState(true);
    // function to handle toggling back and forth
    function handleToggle() {
        setToggle(!toggle)
    }

    function updateLikes(id) {
        console.log("In updateLikes");
        // call PUT
        axios.put(`/gallery/like/${id}`)
            .then(response => getGallery())
            .catch((err) => {
                console.log("Error with PUT:", err);
            })


    }
    return (
        <>
            < div key={listItem.id} >
                <div>{toggle ?
                    <img src={listItem.path} width='100' height='100' onClick={handleToggle} /> :
                    <div onClick={handleToggle}>{listItem.description}</div>}
                </div>
                <button onClick={() => updateLikes(listItem.id)}>Like!</button>
                <div>{listItem.likes}</div>
            </div>
        </>
    )
}

export default GalleryItem