import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [modeName, setmodeName] = useState("Light Mode");
  const [mode, setmode] = useState("light");
  const [textcolor, settextcolor] = useState("dark");
  const [headercolor, setheadercolor] = useState("dark");
  const [Country, setCountry] = useState("in");
  const [progress, setProgress] = useState(0);
  const [cardcolor, setcardcolor] = useState("text-bg-light");
  const [btncolor, setbtncolor] = useState("primary");

  const apikey = process.env.REACT_APP_NEWS_API;
  const handleMode = () => {
    if (modeName === "Light Mode") {
      document.body.style.backgroundColor = "rgb(50,50,50)";
      setmodeName("Dark Mode");
      setmode("dark");
      settextcolor("light");
      setheadercolor("light");
      setcardcolor("text-bg-dark");
      setbtncolor("danger")
    } else if (modeName === "Dark Mode") {
      document.body.style.backgroundColor = "rgb(255,255,255)";
      setmodeName("Light Mode");
      setmode("light");
      settextcolor("dark");
      setheadercolor("dark");
      setcardcolor("text-bg-light");
      setbtncolor("primary");
    }
  };
  const handlecountryin = () => {
    setCountry("in");
  };
  const handlecountryus = () => {
    setCountry("us");
  };
  const handlecountryjp = () => {
    setCountry("jp");
  };
  const pageSize = 6;

  return (
    <Router>
      <Navbar
        modeName={modeName}
        mode={mode}
        textcolor={textcolor}
        handleMode={handleMode}
        handlecountryjp={handlecountryjp}
        handlecountryin={handlecountryin}
        handlecountryus={handlecountryus}
      />
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <Routes>
        <Route
          exact
          path="/Business"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key={`Business/${Country}`}
              headercolor={headercolor}
              pageSize={pageSize}
              Country={Country}
              cardcolor={cardcolor}
              btncolor={btncolor}
              category="business"
            />
          }
        />
        <Route
          exact
          path="/Entertainment"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key={`Entertainment/${Country}`}
              headercolor={headercolor}
              pageSize={pageSize}
              Country={Country}
              cardcolor={cardcolor}
              btncolor={btncolor}
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key={`${Country}`}
              headercolor={headercolor}
              pageSize={pageSize}
              Country={Country}
              cardcolor={cardcolor}
              btncolor={btncolor}
              category="general"
            />
          }
        />
        <Route
          exact
          path="/Health"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key={`Health/${Country}`}
              headercolor={headercolor}
              pageSize={pageSize}
              Country={Country}
              cardcolor={cardcolor}
              btncolor={btncolor}
              category="health"
            />
          }
        />
        <Route
          exact
          path="/Science"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key={`Science/${Country}`}
              headercolor={headercolor}
              pageSize={pageSize}
              Country={Country}
              cardcolor={cardcolor}
              btncolor={btncolor}
              category="science"
            />
          }
        />
        <Route
          exact
          path="/Sports"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key={`Sports/${Country}`}
              headercolor={headercolor}
              pageSize={pageSize}
              Country={Country}
              cardcolor={cardcolor}
              btncolor={btncolor}
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/Technology"
          element={
            <News
              setProgress={setProgress}
              apikey={apikey}
              key={`Technology/${Country}`}
              headercolor={headercolor}
              pageSize={pageSize}
              Country={Country}
              cardcolor={cardcolor}
              btncolor={btncolor}
              category="technology"
            />
          }
        />
      </Routes>
    </Router>
  );
};
export default App;
