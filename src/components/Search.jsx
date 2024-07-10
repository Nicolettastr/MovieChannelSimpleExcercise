import { useState } from "react";
import Button from "./Button";
import { getLocalStorage } from "../helpers/AddToStorage";

const Search = ({ setMoviesList, changeAdd }) => {
    const [searchValue, setSearchValue] = useState("");
    const [notFound, setNotFound] = useState(false);

    const searchMovie = (event) => {
        let target = event.target;
        setSearchValue(target.value);

        let movies = getLocalStorage("movies");

        let filterMovie = movies.filter((movie) =>
            movie.title.toLowerCase().includes(searchValue.toLowerCase())
        );

        if (searchValue.length <= 1 || filterMovie <= 0) {
            filterMovie = getLocalStorage("movies");
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        setMoviesList(filterMovie);
    };

    return (
        <div className='search container'>
            <h3>Search</h3>
            {searchValue.length > 1 && notFound && (
                <span className='notFound'>Not found...</span>
            )}
            <form action=''>
                <input
                    type='text'
                    placeholder='Search'
                    name='search'
                    autoComplete='off'
                    value={searchValue}
                    onChange={searchMovie}
                />
                <div>
                    <Button name={"Search"} className={"primary"} />
                    <Button
                        name={"Add Movie"}
                        className={"secondary"}
                        handleAction={(event) => changeAdd(event, true)}
                    />
                </div>
            </form>
        </div>
    );
};

export default Search;
