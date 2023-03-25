
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, getGallery }) {


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