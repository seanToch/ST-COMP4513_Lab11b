import FavoriteList from './FavoriteList';

const Header = (props) => {
    return(
        <section className="favorites">
        
            <FavoriteList favorites={favorites} />

        </section>
    )
}