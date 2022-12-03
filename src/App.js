// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Components
import AddTodo from './Components/todos/AddTodo'
import Footer from './Components/todos/footer';
import ListTodo from './Components/todos/ListTodo';

function App() {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
      <Footer />
    </div>
  );
}

export default App;
