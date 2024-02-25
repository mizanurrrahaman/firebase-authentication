import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import BooksPage from './views/BooksPage';
import SingleBookPase from './views/SingleBookPase';
import { selectUsers } from './store/usersSlice';
import { useSelector } from 'react-redux';
import AddBookPage from './views/AddBookPage';

function App() {
 
  const user = useSelector(selectUsers);
  return (
    <>
    
     {
      user.currentUser ?
     <BrowserRouter>
       <Routes>
        <Route index element={<BooksPage/>} /> 
        <Route path='add-book' element={<AddBookPage/>}/>
         <Route path='book/:id' element={<SingleBookPase/>}/>
       </Routes>
     </BrowserRouter>
       :
       <LoginPage/>

     }
    </>
  )
}

export default App
