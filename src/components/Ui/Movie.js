import classes from "./Movie.module.css";
const Movie = (props) => {
  const day = new Date(props.data.releasedDate).getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = new Date(props.data.releasedDate).getMonth();
  const monthName = monthNames[monthIndex];
  const formattedDate = day + "-" + monthName;
  return (
    <div className={classes.container}>

    
    <div className={classes.Movie}>
      <div>
        <p>up</p>
        <p>1</p>
        <p>down</p>
        <p>votes</p>
      </div>
      <img src={props.data.poster} alt={props.data.title} />

      <div>
        <h4>{props.data.title}</h4>
        <p>Genre:{props.data.genre}</p>
        <p>Director:{props.data.director}</p>
        <p>Starring:{props.data.stars}</p>
        <p>
          {props.data.runtime} mins | {props.data.language} |{" "}
          {formattedDate}
        </p>
      </div>
      
    </div>
<button>Watch Trailer</button>
    </div>
  );
};

export default Movie;
