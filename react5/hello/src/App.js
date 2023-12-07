// import logo from './logo.svg';
import './App.css';
import Greet from './Event';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Greet name="Raushan"/>
      <h1>What are you doing</h1>
      <Button defaultMessage="I am working on project"/>
      <Greet name="Amit"/>
      <h1>What are you doing</h1>
      <Button defaultMessage="I am learning aangular"/>
      <Greet name="Sanjay"/>
      <h1>What are you doing</h1>
      <Button defaultMessage="I am learning  working on project"/>
      
    
     
    </div>
  );
}

export default App;
