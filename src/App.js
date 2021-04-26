import Header from "./components/header";
import FilterForm from "./components/filterForm";
import Container from "./components/Container";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <BookContextProvider>
      <div>
        <Header></Header>
        <FilterForm></FilterForm>
        <Container></Container>
      </div>
    </BookContextProvider>
  );
}

export default App;
