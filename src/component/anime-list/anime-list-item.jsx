const AnimeListItem = (props) => {
    const {title, image} = props

    return (
        <>
            <h3>{title}</h3>
            <img src={image}/>
        </>
    )
}

export default AnimeListItem