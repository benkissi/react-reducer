import * as React from "react";

import Input from "./components/Input";
import List from "./components/List";

import { useAppState } from "./store/AppContext";
import { colorsList } from "./constants/colors";

import {
  updateSearch,
  setColors,
  setSearchField,
  clearFilter,
} from "./store/AppActions";

import styles from "./app_styles.module.css";

function App() {
  const [previewColor, setPreviewColor] = React.useState("");
  const { state, dispatch } = useAppState();
  let inputRef = React.createRef();

  const getInputValue = React.useCallback(
    (value) => {
      dispatch(updateSearch(value));
    },
    [dispatch]
  );

  const handleItemClick = (value) => {
    dispatch(setSearchField(value));
    inputRef.current.focus();
  };

  const handleCloseList = (event) => {
    const { id } = event.target;

    if (id === "App") {
      inputRef.current.focus();
      dispatch(clearFilter());
    }
  };

  React.useEffect(() => {
    dispatch(setColors(colorsList));
  }, []);

  React.useEffect(() => {
    if (state.selectionMade && state.search) {
      setPreviewColor(state.search);
    } else {
      setPreviewColor("");
    }
  }, [state.selectionMade, state.search]);

  return (
    <div id="App" className={styles.wrapper} onClick={handleCloseList}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title}>Search Colors</div>
          <div
            className={styles.color__preview}
            style={{ backgroundColor: previewColor }}
          >
            {!state.selectionMade ? "No color selected" : ""}
          </div>
          <Input
            onInputChange={getInputValue}
            value={state.search}
            ref={inputRef}
          />
          <div className={styles.list__wrapper}>
            {state.filteredColors.length ? (
              <List
                listItems={state.filteredColors}
                onItemClick={handleItemClick}
                search={state.search}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
