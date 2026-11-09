import SingleFavorite from "./SingleFavorite.jsx";

const FavoriteList = (props) => {
    return (
        <div>
            <h1 className="title is-4">Favorites</h1>
            <div className="columns is-multiline">
                {props.favorites.map( (e) => {
                return (<SingleFavorite key={e.id} movie={e} />);
            })}
            </div>
        </div>  
    )
}

export default FavoriteList;

