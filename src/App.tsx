import './global.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home/Home'
import NewArticle from './pages/NewArticle/NewArticle'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<NewArticle/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
