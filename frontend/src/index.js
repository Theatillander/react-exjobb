import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import ProductPageProducts from './components/ProductPageProducts';

const root = createRoot(document.getElementById('root'));

const measurementData = [];

function MeasureRenderingTime(Component) {

  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
}

const measurementCount = 1000;

// Measure rendering time for App component
for (let i = 0; i < measurementCount; i++) {
  console.log(i);
  MeasureRenderingTime(App);
}

const measurementText = measurementData.join('\n');

function downloadTextFile(filename, text) {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

downloadTextFile('rendering_times.txt', measurementText);