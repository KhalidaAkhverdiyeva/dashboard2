import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routers } from "./routers";

function App() {
  return (
    <div>
      <div className="App">
        <RouterProvider router={routers} />
      </div>
    </div>
  );
}

export default App;
