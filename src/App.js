import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path = '/' component ={HomePage} />
            <Route path = '/shop' component ={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
