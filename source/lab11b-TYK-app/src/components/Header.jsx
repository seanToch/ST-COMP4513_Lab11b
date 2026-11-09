import FavoriteList from './FavoriteList.jsx';

const Header = (props) => {
    return(
        <section className="favorites">
        
            <FavoriteList favorites={props.favorites} />

        </section>
    )
}

export default Header;