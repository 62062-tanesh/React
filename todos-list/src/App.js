
import "./App.css";
import { Footer } from "./Components/Footer";
import { TodoItem } from "./Components/TodoItem";
import {Todos} from "./Components/Todos";
import {Header} from "./Components/Header";

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2"
    },
    {
      sno: 1,
      title: "Go to the ghat",
      desc: "You need to go to the market to get this job done3"
    }
  ]
  return (
    <>
      <Header title="TodoList" searchbar = {false} />
      <TodoItem />
      <Todos todos={todos} />
      <Footer />
    </>
  );
}

export default App;
