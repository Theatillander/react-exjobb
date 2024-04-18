import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// function for measuring renderingtime 
function MeasureRenderingTime () {
  const startTime = performance.now(); 

  const root = createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

window.addEventListener('load', () => {

  const endTime = window.performance.now();
  const totalTime = endTime - startTime;

  // return the totalTime of the measuring
  console.log(totalTime + 'ms');
});
}

const measurementCount = 10;

for (let i = 0; i < measurementCount; i++) {
  MeasureRenderingTime();
}