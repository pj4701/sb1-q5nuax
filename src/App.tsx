import React, { useState } from 'react';
import { Music, Palette, TreePine } from 'lucide-react';
import EcoMusicGenerator from './components/EcoMusicGenerator';
import EcoArtGenerator from './components/EcoArtGenerator';
import GreenSpaceDesigner from './components/GreenSpaceDesigner';

function App() {
  const [activeTab, setActiveTab] = useState('music');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-3xl font-bold text-center">GenAI Eco-Innovation Platform</h1>
      </header>
      <nav className="bg-green-500 p-2">
        <ul className="flex justify-center space-x-4">
          <li>
            <button
              className={`flex items-center px-4 py-2 rounded ${
                activeTab === 'music' ? 'bg-white text-green-600' : 'text-white'
              }`}
              onClick={() => setActiveTab('music')}
            >
              <Music className="mr-2" /> Eco Music
            </button>
          </li>
          <li>
            <button
              className={`flex items-center px-4 py-2 rounded ${
                activeTab === 'art' ? 'bg-white text-green-600' : 'text-white'
              }`}
              onClick={() => setActiveTab('art')}
            >
              <Palette className="mr-2" /> Eco Art
            </button>
          </li>
          <li>
            <button
              className={`flex items-center px-4 py-2 rounded ${
                activeTab === 'greenspace' ? 'bg-white text-green-600' : 'text-white'
              }`}
              onClick={() => setActiveTab('greenspace')}
            >
              <TreePine className="mr-2" /> Green Space
            </button>
          </li>
        </ul>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        {activeTab === 'music' && <EcoMusicGenerator />}
        {activeTab === 'art' && <EcoArtGenerator />}
        {activeTab === 'greenspace' && <GreenSpaceDesigner />}
      </main>
    </div>
  );
}

export default App;