import { FC, lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import StarBackground from "./widgets/StarBackground/ui/StarBackground"

const MainPage = lazy(() => import('./pages/MainPage'))

const App: FC = () => {

  return (
    <>
      <BrowserRouter>
        <StarBackground>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
            </Routes>
          </Suspense>
        </StarBackground>
      </BrowserRouter>
    </>
  )
}

export default App
