function GalleryItem({ listItem }) {
    console.log(
        "this is listItem:", listItem
    );
    return (
        <></>
        // < div key={listItem.id} >
        //     <img src={listItem.path} width='100' height='100' />
        //     <div>{listItem.description}</div>
        //     <button>Like!</button>
        //     <div>{listItem.likes}</div>
        // </div>
    )
}

export default GalleryItem