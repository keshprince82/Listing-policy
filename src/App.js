import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import './App.css';
import List from './pages/list';
import { setUserDetails } from './redux/actions/userAction';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home';
import Details from './pages/details';




function App() {

  const dispatch =  useDispatch()
  const fetchList = (activePage = 1) => {

    fetch(`https://reqres.in/api/users?page=${activePage}&per_page=5`, { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        dispatch(setUserDetails(data))

      })
  }
  useEffect(() => {
    fetchList();
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/lists" name="List Page" render={props => <List  fetchList={fetchList} />} />
      <Route exact path="/details/:id" name="List Page" render={props => <Details  fetchList={fetchList} />} />
      <Route path="/" name="Home" render={props => <Home/>} />
      </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
