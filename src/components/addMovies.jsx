import { addToStorage } from "../helpers/AddToStorage";
import { ImCancelCircle } from "react-icons/im";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
const AddMovies = ({ setMoviesList, changeAdd }) => {
    const ComponentTitle = "Add Movie";

    const getFormValue = (event) => {
        event.preventDefault();

        let target = event.target;
        let title = target.title.value;
        let description = target.description.value;
        let image = target.image.value;

        let movie = {
            id: new Date().getTime(),
            title,
            description,
            image,
        };

        addToStorage("movies", movie);

        setMoviesList((prevState) => {
            if (Array.isArray(prevState)) {
                return [...prevState, movie];
            } else {
                return [movie];
            }
        });
    };

    return (
        <div className='container'>
            {" "}
            <span className='headerAdd'>
                <h3>{ComponentTitle}</h3>
                <Button
                    name={<ImCancelCircle />}
                    className={"cancelBtn"}
                    handleAction={(event) => changeAdd(event, false)}
                />
            </span>
            <form onSubmit={getFormValue}>
                <input
                    type='text'
                    id='title'
                    placeholder='Title'
                    name='title'
                    required
                />
                <input
                    type='text'
                    id='image'
                    placeholder='Image Link'
                    name='Image'
                    required
                />
                <textarea
                    placeholder='Description'
                    id='description'
                    name='description'
                    cols='30'
                    rows='10'
                    required
                ></textarea>
                <input
                    className='generalButton primary'
                    type='submit'
                    value='save'
                    id='save'
                />
            </form>
        </div>
    );
};

export default AddMovies;
