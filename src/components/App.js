import '../styles/App.scss';
import Social from './Social.jsx'
import Main from './Main.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Social />
        <Main />
      </header>
    </div>
  );
}

export default App;
