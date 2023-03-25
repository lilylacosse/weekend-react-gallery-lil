import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList }) {
    console.log('GalleryList component list:', galleryList);
    return (
        <div>
            <h2>Lily's Photo Gallery</h2>

            {galleryList.map((listItem) => (
                <GalleryItem listItem={listItem} />
            ))
            }

        </div >
    )

}

export default GalleryList;