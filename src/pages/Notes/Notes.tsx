import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemIcon, ListItemText, MenuItem, Select, TextField } from "@mui/material"
import React, { FormEvent, FormEventHandler, useState } from "react"
// import { NoteCategoryMapper } from "../../components/helpers/noteCategoryMapper"
import { NoteCategoryIconMapper, NoteCategoryMapper } from "@Components/helpers/noteCategoryMapper"
import { INotesInitialState, NotesContext } from "./context/NotesModalContext"
import { useRef } from "react"

export type NoteCategoryType = 'video' | 'music' | 'video-game'

interface INote {
  id: number,
  title: string,
  description: string,
  category: NoteCategoryType
}

type INoteSimple = Exclude<INote, 'id'>

export function NotesPage() {
  const [state, setState] = useState<INotesInitialState>({
    isDialogOpened: false
  });

  // const [title, setTitle] = useState('')

  const title = useRef(null);


  const [notes, setNotes] = useState<INote[]>([
    {
      id: 1,
      title: 'List item 1',
      description: 'desc',
      category: 'video-game'
    },
    {
      id: 2,
      title: 'List item 2',
      description: 'desc',
      category: 'music'
    }
  ])

  const handleAddNote = (note: any) => {
    // console.log(title)
    // const note: INote = {
    //   id: (new Date()).getMilliseconds(),
    //   title: 'List item 3',
    //   description: 'desc',
    //   category: 'music'
    // }

    note.id = (new Date()).getMilliseconds()

    setNotes([
      ...notes,
      note
    ])
  }

  const handleOpenDialog = () => setState(prev => ({
    isDialogOpened: true
  }))

  const handleCloseModal = () => setState(prev => ({
    isDialogOpened: false
  }))

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data.entries());

    // console.log(values)

    handleAddNote(values);
  }

  console.log("render")
  return (
    <NotesContext.Provider value={state}>
      <Box sx={{ width: '100%' }}>
        <h1>Notes page</h1>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Button variant="contained" onClick={handleOpenDialog}>New</Button>
        </Box>
        <Box>
          <List>
            {
              notes.map((note) => {
                return (
                  <ListItem>
                    <ListItemText>
                      {note.id}
                    </ListItemText>
                    <ListItemText>
                      {note.title}
                    </ListItemText>
                    <ListItemIcon>
                      {NoteCategoryIconMapper(note.category)}
                    </ListItemIcon>
                    <ListItemText>
                      {NoteCategoryMapper(note.category)}
                    </ListItemText>
                  </ListItem>
                )
              })
            }
          </List>
        </Box>
      </Box>
      <Dialog open={state.isDialogOpened}>
        <form onSubmit={handleFormSubmit}>
          <DialogTitle>Add new note</DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField
                variant="standard"
                name="title"
                label="Title"
                ref={title}
                type="text"
                sx={{
                  my: 1
                }}
              >
                Title
              </TextField>
              <TextField
                variant="standard"
                type="text"
                name="description"
                label="Description"
                sx={{
                  my: 1
                }}
              >
                Description
              </TextField>
              <Select name="category">
                <MenuItem value="music">Видео</MenuItem>
                <MenuItem value="video">Музыка</MenuItem>
                <MenuItem value="video-games">Игры</MenuItem>
              </Select>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" type="submit">Add</Button>
            <Button variant="outlined" color="error" onClick={handleCloseModal}>Close</Button>
          </DialogActions>
        </form>
      </Dialog>
    </NotesContext.Provider >
  )
}
