import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { helpHttp } from "./helpers/helpHttp";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import SearchOptions from "./components/SearchOptions";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import AddMovieModal from "./components/AddMovieModal";
import EditMovieModal from "./components/EditMovieModal";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CongratulationsModal from "./components/CongratulationsModal";
import LoginModal from "./components/LoginModal";
import ErrorBoundary from "./components/ErrorBoundary";
import DeleteMovieModal from "./components/DeleteMovieModal";
import MovieDetails from "./components/MovieDetails";
// import {
//   readAllAction,
//   noAction,
//   createAction,
//   updateAction,
//   deleteAction,
// } from "../actions/movieActions";
import { readAllAction, noAction } from "./actions/movieActions";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const state = useSelector((state) => state);
  const { data, sortBy, sortOrder } = state.movie;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  const [url, setUrl] = useState("http://localhost:4000/movies");

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          dispatch(readAllAction(res.data));
        } else {
          dispatch(noAction());
        }
      });
  }, [url, dispatch]);

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenDetails = (movie) => {
    setMovieSelected(movie);
    setShowMovieDetail(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const [movieSelected, setMovieSelected] = useState({});

  const handleSorted = (field) => {
    setUrl(`http://localhost:4000/movies?sortBy=${sortBy}&sortOrder="asc"`);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container fixed>
        <Box sx={{ my: 4 }}>
          <Header handleOpen={handleOpen} showMovieDetail={showMovieDetail} />
          <MovieDetails
            movie={movieSelected}
            setShowMovieDetail={setShowMovieDetail}
            showMovieDetail={showMovieDetail}
          />
          <SearchOptions
            handleSorted={handleSorted}
            moviesLength={data.length}
          />
          <ErrorBoundary>
            <MoviesList handleOpenDetails={handleOpenDetails} />
          </ErrorBoundary>
          <Footer />
          <AddMovieModal open={open} handleClose={handleClose} />
          <EditMovieModal
            openEdit={openEdit}
            handleCloseEdit={handleCloseEdit}
            movie={movieSelected}
          />
          <CongratulationsModal />
          <LoginModal />
          <DeleteMovieModal />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
