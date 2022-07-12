import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import SearchOptions from "./components/SearchOptions";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import BasicModal from "./components/BasicModal";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CongratulationsModal from "./components/CongratulationsModal";
import LoginModal from "./components/LoginModal";
import ErrorBoundary from "./components/ErrorBoundary";

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
          <SearchOptions moviesLength={8} />
          <ErrorBoundary>
            <MoviesList />
          </ErrorBoundary>
          <Footer />
          <BasicModal />
          <CongratulationsModal />
          <LoginModal />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
