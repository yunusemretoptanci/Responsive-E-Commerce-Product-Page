import './App.css';
import Header from './Header';
import LightBox from './LightBox';
import Product from './Product';
import { useStateValue } from './StateProvide';

function App() {
  const [{light }] = useStateValue();

  return (
    <div className="App">
    {light&&<LightBox />}
    <Header />
    <Product />
    </div>
  );
}

export default App;
