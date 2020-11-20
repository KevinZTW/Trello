import "./css/App.css";
import AddList from "./components/AddList";
import { useSelector, useDispatch } from "react-redux";
import List from "./components/List";
import { DragDropContext } from "react-beautiful-dnd";
import { SWITCHCARDINLIST } from "./redux/actions";
function App() {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.listReducer.map((list) => {
      return (
        <List
          id={list.id}
          title={list.title}
          key={list.id}
          cardIds={list.cardIds}
        />
      );
    });
  });
  function onDragEnd(result) {
    const { destination, source, draggableId } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      console.log(destination.index, source.index);
      console.log(source.droppabledId);
      dispatch(
        SWITCHCARDINLIST(source.droppableId, destination.index, source.index)
      );
      // useSelector((state) => {
      //   let sourceListId = source.droppabledId;
      //   let list = state.listReducer.sourceListId;
      //   console.log(state.list);
      // });
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <header className="App-header">
          <h1>My Trello</h1>
        </header>
        <div className="main-board">
          {list}
          <AddList />
        </div>
      </div>
    </DragDropContext>
  );
}

export default App;
