import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const LoadingScreen = () => {
  return (
    <div>
      <Header query={""} setQuery={function (query: string): void {
        throw new Error("Function not implemented.");
      } } /> 
      <div>
        <br />
        <center>
          <br />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831" alt="loading" />
          <br />
          <span>...Loading</span>
        </center>
      </div>
      <Footer />
    </div>
  );
}

export default LoadingScreen;
