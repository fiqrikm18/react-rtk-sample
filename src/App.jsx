import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchLatestMovie } from "./features/movies/movieSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { MOVIE_DB_IMAGE_BASE_URL } from "./constants/App";

function App() {
  const latestMovie = useSelector((state) => state.movie.latestMovie);
  const dispatch = useDispatch();

  const imageBackdrop = `${MOVIE_DB_IMAGE_BASE_URL}/original${latestMovie.poster_path}`;

  useEffect(() => {
    dispatch(fetchLatestMovie());
  }, []);

  return (
    <div className="App">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="250"
          image={
            latestMovie.poster_path
              ? imageBackdrop
              : "http://via.placeholder.com/640x360"
          }
          alt="Poster Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="left">
            {latestMovie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {latestMovie.overview}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
