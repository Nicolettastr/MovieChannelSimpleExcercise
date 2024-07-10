import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import AddMovies from "./components/addMovies";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { getLocalStorage } from "./helpers/AddToStorage";
import Footer from "./components/Footer";

function App() {
    const [moviesList, setMoviesList] = useState([]);
    const [edit, setEdit] = useState(0);
    const [add, setAdd] = useState(false);

    const handleEdit = (id) => {
        setEdit(id);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        let movies = getLocalStorage("movies");
        setMoviesList(movies);
    };

    const changeAdd = (event, bool) => {
        event.preventDefault();
        setAdd(bool);
    };

    return (
        <>
            <div className='main'>
                <header>
                    <Navbar />
                </header>
                <section className='wrapper'>
                    <aside className='addMovie'>
                        <Search
                            setMoviesList={setMoviesList}
                            changeAdd={changeAdd}
                        />
                        {add && (
                            <AddMovies
                                setMoviesList={setMoviesList}
                                moviesList={moviesList}
                                changeAdd={changeAdd}
                            />
                        )}
                    </aside>
                    <section className='cardSection'>
                        {moviesList ? (
                            moviesList.map((card, index) => (
                                <Cards
                                    key={index}
                                    cards={card}
                                    setMoviesList={setMoviesList}
                                    handleEdit={handleEdit}
                                    edit={edit}
                                    setEdit={setEdit}
                                />
                            ))
                        ) : (
                            <p>No movies available, add some</p>
                        )}
                    </section>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default App;
