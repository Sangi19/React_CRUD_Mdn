import './App.css';
import CreateFruit from './components/CreateFruit';
import ShowFruitList from './components/ShowFruitList';
import {  useState } from 'react';

function App() {
  const [fruitsList, setFruitsList]=useState(['apple','orange','mango'])
  const [fruit,setFruit]=useState()

 return (
    <div className="App">
      <CreateFruit fruitsList={fruitsList} setFruitsList={setFruitsList} fruit={fruit} setFruit={setFruit} />
      <ShowFruitList fruitsList={fruitsList} />
      {/* <table>
        <tbody>
      {fruitsList.map((item)=> (                
                    <tr key={item}>
                        <td>{item}</td>
                        <td><button>edit</button></td>
                        <td><button>delete</button></td>
                    </tr>
                ))}
                </tbody>
                </table> */}

    </div>
  );
}



export default App;
