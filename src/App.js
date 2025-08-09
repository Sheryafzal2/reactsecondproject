import logo from './logo.svg';
import './App.css';

function App() {
  let name ="why brother?";
  let 1=[20,30,40,50]
  return (
    <div classname="App">
      <h1>{name}</h1>
      { 1.map((v)=>{
        return(
          <div>{v}</div>
      )
      })}
    </div>
  );
}

export default App;
