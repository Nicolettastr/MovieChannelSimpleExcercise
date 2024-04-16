import { getLocalStorage } from "../helpers/AddToStorage";
import Button from "./Button";

const Edit = ({ movie, setEdit, setMoviesList }) => {
    console.log(movie);

    const { id, title, description, image } = movie;

    const update = (event, id) => {
        event.preventDefault();

        let target = event.target;
        const movies = getLocalStorage("movies");

        const index = movies.findIndex((movie) => movie.id === id);

        let updatedMovie = {
            id,
            title: target.title.value,
            description: target.description.value,
            image: target.image.value,
        };

        console.log(updatedMovie);

        movies[index] = updatedMovie;

        localStorage.setItem("movies", JSON.stringify(movies));

        setMoviesList(movies);
        setEdit(0);
    };

    const handleCancelEdit = () => {
        setEdit(0);
    };

    return (
        <section className='container'>
            <h3>{title}</h3>
            <form onSubmit={(e) => update(e, id)}>
                <input
                    type='text'
                    name='title'
                    className='title'
                    defaultValue={title}
                />
                <input
                    type='text'
                    id='image'
                    placeholder='Image Link'
                    defaultValue={image}
                    name='Image'
                />
                <textarea
                    name='description'
                    id='editDescription'
                    cols='30'
                    rows='10'
                    defaultValue={description}
                    className='description'
                />
                <div className=''>
                    <input
                        type='submit'
                        className='generalButton primary'
                        value={"update"}
                    />
                    <Button
                        name={"Cancel"}
                        className={"secondary"}
                        onClick={handleCancelEdit}
                    />
                </div>
            </form>
        </section>
    );
};

export default Edit;
