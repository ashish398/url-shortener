import NewUrl from "./NewUrl";
import UrlList from "./UrlList";
import Header from "./Header";
import Card from "./Card.js";
import styles from "./Home.module.css"

const Home = () => {
  return (
    <>
      <Card>
        <Header />
        <hr></hr>
        <br></br>
        <br></br>
        <NewUrl />
        <br></br>
        <br></br>
        <UrlList />
      </Card>
      <h5 className = {styles.footer}>Made with <span>&#128156;</span> by Ashish Jain</h5>
    </>
  );
};

export default Home;
