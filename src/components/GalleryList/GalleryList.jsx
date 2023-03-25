import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList }) {
    console.log('GalleryList component list:', galleryList);
    return (
        <div>
            <h2>Lily's Photo Gallery</h2>

            {/* {galleryList.map((listItem) => (
                < div key={listItem.id} >
                    <img src={listItem.path} width='100' height='100' />
                    <div>{listItem.description}</div>
                    <button>Like!</button>
                    <div>{listItem.likes}</div>
                </div>
            )
                // <GalleryItem listItem={listItem} />
            )
            } */}

        </div >
    )

}

export default GalleryList;