import "./css/App.css";
import AddList from "./components/AddList";
import { useSelector } from "react-redux";
import List from "./components/List";

function App() {
  const list = useSelector((state) => {
    return state.listReducer.map((list) => {
      return <List id={list.id} title={list.title} key={list.id} />;
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Trello</h1>
      </header>
      <div className="main-board">
        {list}
        <AddList />
      </div>
    </div>
  );
}

export default App;
