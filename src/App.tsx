import { FC, lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const MainPage = lazy(() => import('./pages/MainPage'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))

const App: FC = () => {

  return (
    <>
      <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<MainPage/>}/>
              <Route path='/skills' element={<SkillsPage/>}/>
              <Route path='/pricing' element={<PricingPage/>}/>
            </Routes>
          </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
