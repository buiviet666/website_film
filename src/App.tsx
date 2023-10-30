
import DisplayItems from './components/DisplayItems';
import Header from './components/Header';
import { trending, apiKey } from './modules/apiLinks';

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DisplayItems
        apiEndpoint={`${trending}?api_key=${apiKey}`}
        numberOfMovies={10}
        moviesOn={false}
        tvShowOn={true}
        itemHeading="Trending Movies"
        showButtons={true} />
    </>
  );
}

export default App;
