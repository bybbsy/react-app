import React from "react";
import { useContext } from "react";

export interface INotesInitialState {
  isDialogOpened: boolean
}

const InitialState: INotesInitialState = {
  isDialogOpened: false
}

export const NotesContext = React.createContext<INotesInitialState>(InitialState);

export const useNotesContext = () => useContext(NotesContext)
