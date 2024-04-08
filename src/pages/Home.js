import { useEffect, useState } from "react";
import Header from "../components/Header.js/Header";
import axios from "axios";
import Movie from "../components/Ui/Movie";
import classes from "./Home.module.css";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const parameter = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };
    const headers = {
      "Access-Control-Allow-Origin": "*",
    };
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://hoblist.com/api/movieList",
          parameter,
          { headers }
        );
        setMovies(response.data.result);
      } catch (error) {
        console.error(error.message);
      }

      setLoading(false);
    };

    fetchData();
  }, []);
  const moviesList = movies.map((mov) => <Movie key={mov._id} data={mov} />);
  return (
    <div className={classes.home}>
      <Header onOpen={props.onOpen} current='home' />
      <p>Popular Movies | Kannada</p>
      {loading && <p>Loading...</p>}
      {moviesList}
    </div>
  );
};

export default Home;
