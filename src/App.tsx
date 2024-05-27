import React from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import TournamentPage from "./pages/TournamentPage";
import Header from "./components/Header";
import { useRecoilValue } from "recoil";
import { ThemeFlag, themeState } from "./stores(Atomes)/ThemeAtome";
import { darkTheme, lightTheme } from "./styles/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import ResultPage from "./pages/ResultPage";

function App(): JSX.Element {
  const currentTheme = useRecoilValue(themeState);
  const theme = currentTheme === ThemeFlag.light ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<TotalLayout />}>
            <Route index element={<StartPage />} />
            <Route path="tournament" element={<TournamentPage />} />
            <Route path="result" element={<ResultPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

const TotalLayout = () => {
  return (
    <div className="total-layout">
      <GlobalStyle />
      <Header />
      <Outlet />
    </div>
  );
};
