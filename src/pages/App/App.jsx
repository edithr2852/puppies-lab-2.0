import { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../Components/NavBar/NavBar";
import "./App.css";
import PuppyListPage from '../PuppyListPage/PuppyListPage';
import AddPuppyPage from "../AddPuppyPage/AddPuppyPage";
import PuppyDetailPage from '../PuppyDetailPage/PuppyDetailPage';
import EditPuppyPage from '../EditPuppyPage/EditPuppyPage';
import * as puppyAPI from "../../utilities/puppies-api";


export default function App() {
  const [puppies, setPuppies] = useState([]);
  const [user, setUser] = useState(getUser());
  const history = useHistory();

  useEffect(() => {
    history.push('/')
  }, [puppies, history])

  useEffect(() => {
    async function getPuppies(){
      const puppies = await puppyAPI.getAll();
      setPuppies(puppies);
    }
    getPuppies();
  }, [])

  async function handleAddPuppy (newPupData){
    const newPup = await puppyAPI.create(newPupData);
    setPuppies([...puppies, newPup])
  }

  async function handleUpdatePuppy(updatedPupData) {
    const updatedPuppy = await puppyAPI.update(updatedPupData);
    const newPuppiesArray = puppies.map(p =>
      p._id === updatedPuppy._id ? updatedPuppy : p
    );
    setPuppies(newPuppiesArray);
  }

  async function handleDeletePuppy(id) {
    await puppyAPI.deleteOne(id);
    setPuppies(puppies.filter(p => p._id !== id))
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
          <Route exact path='/'>
            <PuppyListPage
              puppies={puppies}
              handleDeletePuppy={handleDeletePuppy}
              />
          </Route>
          <Route exact path='/add'>
            <AddPuppyPage
            handleAddPuppy={handleAddPuppy}
            />
          </Route>
          <Route exact path='/details'>
            <PuppyDetailPage />
          </Route>
          <Route exact path='/edit'>
            <EditPuppyPage handleUpdatePuppy={handleUpdatePuppy}/>
          </Route>
          <Route path="/orders/new">
            <NewOrderPage />
          </Route>
          <Route path="/orders">
            <OrderHistoryPage />
          </Route>
          <Redirect to="/orders" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}