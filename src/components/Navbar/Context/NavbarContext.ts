import { useContext, createContext } from "react"

type INavbarState = {
  isOpened: boolean
}

const initalNavbarState: INavbarState = {
  isOpened: false
}

export const NavbarContext = createContext<INavbarState>(
  initalNavbarState,
);

export const useNavbarContext = () => useContext(NavbarContext);
