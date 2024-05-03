import './App.css';
import Nav from "./Nav";

let date = new Date()

let singleUser = {
  name: 'John',
  time: date.toDateString(),
}

function App() {
  return (
    <div className="App">
      <Nav />
      <section>
      <h1>{singleUser.name}</h1>
      <p>{singleUser.time}</p>
      </section>
    </div>
  );
}

export default App;
