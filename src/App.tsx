import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar } from "./Components/NavBar";
import SearchCategory from "./Components/SearchCategory";
import PageContent from "./Components/PageContent";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Container>
        <NavBar />
        <SearchCategory />
        <PageContent />
      </Container>
      <Footer />
    </>
  );
}
export default App;
