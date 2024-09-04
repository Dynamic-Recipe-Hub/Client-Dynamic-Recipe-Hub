// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeEdit from './components/RecipeEdit';
import RecipeForm from './components/RecipeEdit';
import Sidebar from './components/Sidebar';
import AuthForm from './components/login';
const App = () => (
  <BrowserRouter>
  <Sidebar />
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
      <Route path="/recipes/:id/edit" element={<RecipeForm />} />
     
      <Route path="/login" element={<AuthForm />} />
<Route path="/recipes/new" element={<RecipeForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
