import express from 'express';
import cors from 'cors';
import * as mm from '@magenta/music';
import * as ml5 from 'ml5';
import fetch from 'node-fetch';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Music Generation
app.post('/api/generate-music', async (req, res) => {
  const { environmentalData } = req.body;
  
  // Use Magenta.js to generate music
  const music_vae = new mm.MusicVAE('https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_4bar_small_q2');
  await music_vae.initialize();
  
  const sample = await music_vae.sample(1);
  const noteSequence = sample[0];
  
  // Convert noteSequence to MIDI and send it back
  const midi = mm.sequenceProtoToMidi(noteSequence);
  res.json({ midi: Buffer.from(midi).toString('base64') });
});

// Art Generation
app.post('/api/generate-art', async (req, res) => {
  const { environmentalTheme } = req.body;
  
  // Use ml5.js to generate art (this is a placeholder, as ml5.js doesn't have a built-in art generation model)
  // In a real scenario, you might use a more sophisticated model or API
  const result = await fetch(`https://source.unsplash.com/800x600/?${encodeURIComponent(environmentalTheme)}`);
  const imageBuffer = await result.buffer();
  
  res.json({ image: imageBuffer.toString('base64') });
});

// Green Space Design
app.post('/api/generate-green-space', async (req, res) => {
  const { urbanSpaceDescription } = req.body;
  
  // This is a placeholder. In a real scenario, you'd use a more sophisticated model or API
  // for generating or modifying images based on the description
  const result = await fetch(`https://source.unsplash.com/800x600/?${encodeURIComponent('urban park,' + urbanSpaceDescription)}`);
  const imageBuffer = await result.buffer();
  
  res.json({ image: imageBuffer.toString('base64') });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});