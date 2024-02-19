import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../Pages/';

const Main = () => {
  return (
      <main className="mx-28 h-screen">
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
      </main>
  );
}

export default Main