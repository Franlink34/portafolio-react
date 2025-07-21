import './App.css';
import { ComponenteHeader } from './ComponenteHeader';
import { ComponenteSidebar } from './ComponenteSidebar';
import { ComponenteContexto } from './ComponenteContexto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ComponenteHeader />
      </header>
      <div className="App-container">
        <ComponenteSidebar />
        <ComponenteContexto />
        </div>
    </div>
  );
}

export default App;
