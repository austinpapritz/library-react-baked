import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail.js';
import NotFound from './components/notfound/NotFound.js';
import Home from './components/home/Home.js';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
