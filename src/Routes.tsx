import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { AboutPage } from "./pages/About";
import { LoginPage } from "./pages/Login";
import { MainPage } from "./pages/Main";
import { NotesPage } from "./pages/Notes/Notes";


export function MainRoutes() {
  const routes = useRoutes([
    {
      path: '/',
      element: <MainPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/notes',
      element: <NotesPage />
    }
  ])

  return (
    <MainLayout>
      {routes}
    </MainLayout>
  )
}
