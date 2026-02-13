import { Route, Routes } from "react-router-dom"
import Aside from "./components/Aside/aside"
import { routes } from "./constants/routes"

const App = () => {
  return (
    <div className="wrap">
      <Aside />
      <main>
          <Routes>
            {
              routes.map((route, index) => (
                <Route
                  key={index} 
                  path={route.path}
                  element={route.element}
                />
              ))
              }
            
          </Routes>
      </main>
    </div>
  )
}

export default App