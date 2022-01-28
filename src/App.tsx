import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="flex flex-col items-center">
        <img src={logo} className="w-[100px]" alt="logo" />
        <p className="text-primary">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link text-secondary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
