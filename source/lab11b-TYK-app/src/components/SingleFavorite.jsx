//Single Favorite Item
const SingleFavorite = (props) => {

    return (
        <div class="column is-1"><img src={`https://image.tmdb.org/t/p/w342/${props.movie.poster}`} alt={props.title} /></div>
    )
}

export default SingleFavorites;