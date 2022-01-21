import "./App.css";
import { Layout } from "./components/Layout";
import { Search } from "./components/Search";
import { Results } from "./components/Results";
import { Title } from "./components/Title";

function App() {
  return (
    <Layout>
      <Title />
      <Search />
      <Results />
    </Layout>
  );
}

export default App;
