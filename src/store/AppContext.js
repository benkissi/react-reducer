import * as React from 'react'

import {reducer} from './AppReducer'

const INITIAL_STATE = {
    search: "",
    colors: [],
    filteredColors: [],
    selectionMade: false,
}

const AppContext = React.createContext()

export const AppRpovider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppState = () => React.useContext(AppContext)

