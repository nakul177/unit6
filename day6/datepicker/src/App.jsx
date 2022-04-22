import logo from './logo.svg';
import './App.css';
import { Dates } from './components/Date';

function App() {



return (<div className='App'>
 <h1 style={{"background-color":"White" ,"color":"Black"}}>My Calender</h1>
  <Dates/>
</div>)
}

export default App;