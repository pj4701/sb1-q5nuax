import React, { useState } from 'react';

const EcoMusicGenerator: React.FC = () => {
  const [environmentalData, setEnvironmentalData] = useState('');
  const [generatedMusic, setGeneratedMusic] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/generate-music', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ environmentalData }),
      });
      const data = await response.json();
      setGeneratedMusic(data.midi);
    } catch (error) {
      console.error('Error generating music:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">AI-Enhanced Environmental Music Generator</h2>
      <div className="mb-4">
        <label htmlFor="environmentalData" className="block mb-2">Enter Environmental Data:</label>
        <textarea
          id="environmentalData"
          className="w-full p-2 border rounded"
          value={environmentalData}
          onChange={(e) => setEnvironmentalData(e.target.value)}
          placeholder="e.g., Rainforest sounds, ocean waves, endangered species calls"
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleGenerate}
      >
        Generate Music
      </button>
      {generatedMusic && (
        <div className="mt-4">
          <h3 className="font-bold">Generated Music:</h3>
          <audio controls src={`data:audio/midi;base64,${generatedMusic}`} />
        </div>
      )}
    </div>
  );
};

export default EcoMusicGenerator;