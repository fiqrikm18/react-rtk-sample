import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchLatestMovie } from "./features/movies/movieSlice";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MOVIE_DB_IMAGE_BASE_URL } from "./constants/App";

function App() {
  const latestMovie = useSelector((state) => state.movie.latestMovie);
  const dispatch = useDispatch();

  const imageBackdrop = `${MOVIE_DB_IMAGE_BASE_URL}/W500${latestMovie.poster_path}`;

  useEffect(() => {
    dispatch(fetchLatestMovie());
  }, []);

  return (
    <div className="App">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={imageBackdrop}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {latestMovie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {latestMovie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
