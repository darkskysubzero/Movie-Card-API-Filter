import { useEffect, useState } from "react";

import { BallTriangle } from "react-loader-spinner";



function App() {


  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      //https://api.themoviedb.org/3/movie/popular?api_key=0577c614ef28d117c73e415b1d7fbb1a&language=en-US&page=1
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=0577c614ef28d117c73e415b1d7fbb1a&language=en-US&page=1");
      const data = await response.json();
      console.log(data);

    } catch (error) {

    }
  }


  useEffect(() => {

    const timeout = setTimeout(() => {
      setLoading(true);
      fetchMovies();
    }, 1000)

    return () => {
      clearTimeout(timeout);
    }

    setLoading(false);
  }, [])



  return (
    <div className="App">

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

      {loading &&
        <h1>Hello</h1>}




    </div>
  );
}

export default App;
