import "./app.scss"
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { Routes, Route, Navigate } from "react-router-dom"


const App = () => {
  const user = true;
  return (
    <>
      <Routes>


        {/* <Route exact path='/' element={user? <Home /> : <Navigate to="/register"/> } /> */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/login' element={!user? <Login /> : <Navigate to="/"/> } /> */}
        <Route path='/home' element={<Home />} />

        {user && (
          <>
            <Route path='/watch' element={<Watch />} />
            <Route path='/movies' element={<Home type="movie" />} />
            <Route path='/series' element={<Home type="series" />} />
          </>
        )
        }
      </Routes>

    </>
  );
};

export default App;