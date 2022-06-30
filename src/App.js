import * as React from "react";
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

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container fixed>
        <Box sx={{ my: 4 }}>
          <Header />
          <SearchOptions />
          <ErrorBoundary>
            <MoviesList />
          </ErrorBoundary>
          <Footer />
          <AddMovieModal />
          <EditMovieModal />
          <CongratulationsModal />
          <LoginModal />
          <DeleteMovieModal />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
