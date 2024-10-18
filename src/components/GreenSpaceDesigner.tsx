import React, { useState } from 'react';

const GreenSpaceDesigner: React.FC = () => {
  const [urbanSpaceDescription, setUrbanSpaceDescription] = useState('');
  const [designedSpace, setDesignedSpace] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/generate-green-space', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urbanSpaceDescription }),
      });
      const data = await response.json();
      setDesignedSpace(data.image);
    } catch (error) {
      console.error('Error generating green space design:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Green Space and Urban Design</h2>
      <div className="mb-4">
        <label htmlFor="urbanSpaceDescription" className="block mb-2">Describe the Urban Space:</label>
        <textarea
          id="urbanSpaceDescription"
          className="w-full p-2 border rounded"
          value={urbanSpaceDescription}
          onChange={(e) => setUrbanSpaceDescription(e.target.value)}
          placeholder="e.g., Downtown area, abandoned lot, rooftop"
        />
      </div>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleGenerate}
      >
        Generate Green Space Design
      </button>
      {designedSpace && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Generated Green Space Design:</h3>
          <img src={`data:image/jpeg;base64,${designedSpace}`} alt="AI-generated green space design" className="w-full rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default GreenSpaceDesigner;