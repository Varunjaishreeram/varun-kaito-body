import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TopGainers from './components/top-gainers';

function App() {
  return (
    <div className="min-h-screen bg-black p-6">
      <TopGainers />
    </div>
  );
}

export default App
