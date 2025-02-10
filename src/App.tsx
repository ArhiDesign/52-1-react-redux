import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'

//lessons
import Layout from 'pages/UsersApp/Layout/Layout'
import Home from 'pages/UsersApp/Home/Home'
import Users from 'pages/UsersApp/Users/Users'
import Lesson17 from 'lessons/Lesson17/Lesson17'

//homeworks
import Homework17 from 'homeworks/Homework17/Homework17'

//consultations

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* <Lesson17 /> */}
      {/* UserApp - Practice - Lesson17 */}
      {/*<Homework17 />*/}
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='*' element='Page not found'/>
          <Route path='/Lesson17' element={<Lesson17/>}/>
          <Route path='/Homework17' element={<Homework17/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
