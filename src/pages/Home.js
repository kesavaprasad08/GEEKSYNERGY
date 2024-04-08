import { useEffect, useState } from "react";
import Header from "../components/Header.js/Header";
import axios from "axios";
import Movie from "../components/Ui/Movie";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
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
    };

    fetchData();
  }, []);
  console.log(movies)
  const moviesList = movies.map(mov => <Movie key={mov._id} data={mov} />) 
  return (
    <div>
      <Header onOpen={props.onOpen} />
      {moviesList}
    </div>
  );
};

export default Home;
