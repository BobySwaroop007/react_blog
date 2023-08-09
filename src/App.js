import Post from './Components/Post';
import './App.css';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import Blog_post from './Components/Blog_post';
import Note from './Components/Note';
function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/blog' element={<Blog_post />}/>
          <Route path='/post' element={ <Post />}/>
          <Route path='/' element={ <Note />}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
