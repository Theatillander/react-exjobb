import Card from './Card';
import '../style/products.css';
import React, { useState, useEffect } from 'react';

interface CardData {
  id: number;
  price: number;
  rating: number;
  text: string;
  image: string;
  name: string;
}

function ProductPageProducts() {
  const MAX_COUNT = 3000; // ändra detta värdet för att få ut X antal mätningar

  const [data, setData] = useState<CardData[]>([]);

  const startTime = performance.now();

  if (!localStorage.getItem('measurementCount')) {
    localStorage.setItem('measurementCount', '0');
  }

  if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify([]));
  }
  
  const countString: string|null = localStorage.getItem('measurementCount');
  const count: number|null = countString !== null ? parseInt(countString) : null;
  if (count == null) throw new TypeError("countString can't be null");

  useEffect(() => {

    if (count < MAX_COUNT){
      fetch('/cards.json')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.error('Error fetching data:', error));

      if (data.length === 1000){ // Mystery
        const endTime = performance.now();
        const totalTime = endTime - startTime;
        console.log(`${count}: ${totalTime}`);

        let lsData = localStorage.getItem('data');
        let prevArr: number[]|null = lsData !== null ? JSON.parse(lsData) : null;
        if (prevArr !== null) prevArr.push(totalTime);
        else if (prevArr == null) throw new TypeError("prevArr can't be null");
        localStorage.setItem('data', JSON.stringify(prevArr));
  
        localStorage.setItem('measurementCount', JSON.stringify(count+1));
      }
  
      setTimeout(() => {
        setData([]);
      }, 3000);
    }

    else if (count >= MAX_COUNT){
      let lsData = localStorage.getItem('data');
      let finishedMeasurement = lsData !== null ? JSON.parse(lsData) : null;
      const blob = new Blob([finishedMeasurement], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'measurement js');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }

  }, [data])



  return (
    <div className='gallery'>
      {data.map(item => (
        <Card
          id={item.id}
          key={item.id}
          price={item.price}
          rating={item.rating}
          name={item.name}
          image={item.image}
          text={item.text}
        />
      ))}
    </div>
  );
}

export default ProductPageProducts;
