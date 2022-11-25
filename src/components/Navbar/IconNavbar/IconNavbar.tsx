import { Close, MenuOpen, PhotoCamera } from "@mui/icons-material";
import { IconButton, MenuList } from "@mui/material";

export function IconNavbar({ handleClick, navbarState }: { handleClick: () => void, navbarState: boolean } ) {
  return (
    <div className="">

        <IconButton onClick={handleClick} color="secondary">
          { navbarState ? <Close></Close> : <MenuOpen></MenuOpen> }
        </IconButton>


    </div>
  )
}
