import * as React from "react";

import Input from "./components/Input";

import { AppProvider, useAppState } from "./store/AppContext";

import {
  updateSearch,
  setColors,
  setSearchField,
  clearFilter,
} from "./store/AppActions";

import "./App.css";

function App() {
  const { state, dispatch } = useAppState();

  const getInputValue = React.useCallback(
    (value) => {
      dispatch(updateSearch(value));
    },
    [dispatch]
  );

  return (
    <>
      <div className="App"> App loaded</div>
      <Input onInputChange={getInputValue} value={state.search} />
    </>
  );
}

export default App;
