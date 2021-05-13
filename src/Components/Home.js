import React from "react";
import NewUrl from "./NewUrl";
import UrlList from "./UrlList";
import Header from "./Header";
import Card from "./Card.js";
const Home = () => {
  return (
    <div>
      <Header />
      <br></br>
      <Card>
        <NewUrl />
        <br></br>
        <br></br>
        <UrlList />
      </Card>
    </div>
  );
};

export default Home;
