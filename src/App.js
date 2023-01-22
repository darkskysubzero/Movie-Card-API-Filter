import { useEffect, useState } from "react";

import { BallTriangle } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Movie from "./Movie";
import Filter from "./Filter";

import { motion, AnimatePresence } from "framer-motion";


function App() {


  const [loading, setLoading] = useState(null);
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // action = 28, comedy = 35, 
  const [activeGenre, setActiveGenre] = useState(0);



  const fetchMovies = async () => {
    try {
      setLoading(true);
      //https://api.themoviedb.org/3/movie/popular?api_key=0577c614ef28d117c73e415b1d7fbb1a&language=en-US&page=1
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0577c614ef28d117c73e415b1d7fbb1a&language=en-US&page=1");
      const data = await response.json();
      setMovies(data.results);
      setFiltered(data.results);
      toast.success("Successfully received movies!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    } catch (error) {
      toast.error("There was an error!");
    }
  }


  useEffect(() => {

    const timeout = setTimeout(() => {
      fetchMovies();
    }, 1000)

    return () => {
      clearTimeout(timeout);
    }

  }, [])



  return (
    <div className="app">
      <ToastContainer />
      <div className="loading">
        {!loading && <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#000dff"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />}
      </div>


      {loading && <Filter
        movies={movies}
        filtered={filtered}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />}


      <motion.div layout
        className="movies">
        <AnimatePresence>

          {loading && (
            filtered.map(movie => <Movie key={movie.id} data={movie} />)
          )}

        </AnimatePresence>
      </motion.div>


    </div>
  );
}

export default App;
