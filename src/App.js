import MainNavigation from "./components/layout/MainNavigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <div>
        <h1>App.js</h1>
      </div>
      <div></div>
      <Outlet />
    </div>
  );
}

export default App;
