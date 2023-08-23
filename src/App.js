import Post from './Components/Post';
import './App.css';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Blog_post from './Components/Blog_post';
import Note from './Components/Note';
import Navbar from './Components/Navbar';
import Blog from './Components/Blog';
import Magzine from './Components/Magzine';
import Interviews from './Components/Interviews';
import Area from './Components/Area';
import { useState } from 'react';
function App() {


  return (
    <div className="App">
        <Router>
          <Navbar />
        <Routes>
          {/* <Route path='/blog' element={<Blog_post />}/> */}
          <Route path='/post' element={ <Post />}/>
          <Route path='/note' element={ <Note />}/>
          <Route path='/blog' element={ <Blog />}/>
          <Route path='/magzine' element={ <Magzine />}/>
          <Route path='/interview' element={ <Interviews />}/>
          <Route path='/area' element={ <Area  />}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
