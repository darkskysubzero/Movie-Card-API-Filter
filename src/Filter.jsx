import React from 'react';
import { useEffect } from 'react';


const Filter = (props) => {

    const { movies, setFiltered, activeGenre, setActiveGenre } = props;


    useEffect(() => {

        if (activeGenre === 0) {
            setFiltered(movies);
        } else {
            const filteredMovies = movies.filter((movie) => movie.genre_ids.includes(activeGenre));
            setFiltered(filteredMovies);
        }



    }, [activeGenre])

    return (
        <div>
            <div className="filter-container">
                <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
                <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Comedy</button>
                <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button>
            </div>
        </div>
    );
}

export default Filter;
