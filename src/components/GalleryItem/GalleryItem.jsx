import { useState } from "react";
import axios from 'axios';

function GalleryItem({ listItem, getGallery }) {
    // console.log("this is listItem:", listItem);
    // state variable to handle toggling 
    const [toggle, setToggle] = useState(true);

    // function to handle toggling back and forth
    function handleToggle() {
        setToggle(!toggle)
    }
    // function to handle updating likes 
    function updateLikes(id, likes) {
        console.log("In updateLikes, # of likes:", likes);
        let numLikes = { likeCount: likes }
        console.log("numLikes:", numLikes
        );
        // call PUT
        axios.put(`/gallery/like/${id}`, numLikes)
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
                <button onClick={() => updateLikes(listItem.id, listItem.likes)}>Like!</button>
                <div>{listItem.likes}</div>
            </div>
        </>
    )
}

export default GalleryItem