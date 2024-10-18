import React, { useState } from 'react';

const EcoArtGenerator: React.FC = () => {
  const [environmentalTheme, setEnvironmentalTheme] = useState('');
  const [generatedArt, setGeneratedArt] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/generate-art', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ environmentalTheme }),
      });
      const data = await response.json();
      setGeneratedArt(data.image);
    } catch (error) {
      console.error('Error generating art:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Eco-Art Generator</h2>
      <div className="mb-4">
        <label htmlFor="environmentalTheme" className="block mb-2">Enter Environmental Theme:</label>
        <input
          type="text"
          id="environmentalTheme"
          className="w-full p-2 border rounded"
          value={environmentalTheme}
          onChange={(e) => setEnvironmentalTheme(e.target.value)}
          placeholder="e.g., Climate change, deforestation, ocean pollution"
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleGenerate}
      >
        Generate Art
      </button>
      {generatedArt && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Generated Art:</h3>
          <img src={`data:image/jpeg;base64,${generatedArt}`} alt="AI-generated eco-art" className="w-full rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default EcoArtGenerator;