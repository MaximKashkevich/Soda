import { Container } from "./components/container";
import { Header } from "./components/Header";
import { ProductsList } from "./components/products-list";
const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <nav>
        <h1 className="my-4 font-extrabold text-2xl">Все Напитки</h1>
        <ProductsList />
      </nav>
    </Container>
  );
};

export default App;
