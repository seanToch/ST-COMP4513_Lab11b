
//Single Favorite Item
const SingleFavorite = (props) => {

    return (
        <div className="column is-1"><img src={`https://image.tmdb.org/t/p/w342${props.movie.poster}`} alt={props.movie.title} /></div>
    )
}

export default SingleFavorite;