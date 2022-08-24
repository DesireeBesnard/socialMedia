import "./App.css"
import Auth from "./app/pages/auth";
import Home from "./app/pages/home";
import Profile from "./app/pages/profile";

function App() {
  return (
    <div className="App">
      <div className='blur'></div>
      <div className='blur'></div>
      {/*<Home />*/}
      <Profile />
      {/*<Auth />*/}
    </div>
  );
}

export default App;