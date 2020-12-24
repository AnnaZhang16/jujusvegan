import './App.css';
import React from 'react'; 
import Figure from 'react-bootstrap/Figure';

function App() {
    return (
    <div className="App" >
    <header className="App-header" > {
    <Figure.Image 
    width={408}
    height={264}
    src={process.env.PUBLIC_URL + '/JUJUS_PNG.png'} /> }

    </header>
    </div >
    );
}

export default App;