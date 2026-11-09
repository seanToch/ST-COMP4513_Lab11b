import SingleMovie from './SingleMovie.jsx';

const MovieList = (props) => {
    return (
        <ul className="columns is-multiline">
            {props.movieData.map( (e) => {
                return (<SingleMovie key={e.id} movie={e} handler={props.handler} />);
            })}
        </ul>
    )
}

export default MovieList;

