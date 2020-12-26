import { AppRpovider } from "./store/AppContext";

import "./App.css";

function App() {
  return (
    <AppRpovider>
      <div className="App"> App loaded</div>
    </AppRpovider>
  );
}

export default App;
