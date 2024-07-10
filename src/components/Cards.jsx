/* eslint-disable react/prop-types */
import Button from "./Button";
import Edit from "./Edit";
import { getLocalStorage } from "../helpers/AddToStorage";

const Cards = ({ cards, setMoviesList, edit, handleEdit, setEdit }) => {
    const handleDelete = (id) => {
        let movies = getLocalStorage("movies");
        let filterMovies = movies.filter((movie) => movie.id !== id);
        setMoviesList(filterMovies);
        localStorage.setItem("movies", JSON.stringify(filterMovies));
    };

    return (
        <section className='card'>
            <h3 className='cardTitle'>{cards.title}</h3>
            <img className='movieImage' src={cards.image} alt='movie image' />
            <p>{cards.description}</p>
            <div>
                <Button
                    name={"Edit"}
                    handleAction={() => handleEdit(cards.id)}
                    className={"primary"}
                />
                <Button
                    name={"Delete"}
                    handleAction={() => handleDelete(cards.id)}
                    className={"secondary"}
                />
            </div>
            {edit === cards.id && (
                <Edit
                    movie={cards}
                    setEdit={setEdit}
                    setMoviesList={setMoviesList}
                />
            )}
        </section>
    );
};

export default Cards;
