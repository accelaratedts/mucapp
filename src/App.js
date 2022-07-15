import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SharedLayout from './Layout/SharedLayout';
import Feeds from './Pages/Feeds';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Feeds/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
