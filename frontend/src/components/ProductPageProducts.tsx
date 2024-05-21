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
  const [data, setData] = useState<CardData[]>([]);
  const [measurementCount, setMeasurementCount] = useState<number>(parseInt(localStorage.getItem('measurementCount') || '0'));
  const [startTime, setStartTime] = useState<number>(performance.now());

  const MAX_COUNT: number = 100;

  useEffect(() => {
    const fetchData = async () => {
      const count: number = parseInt(localStorage.getItem('measurementCount') || '0');

      if (count < MAX_COUNT) {
        try {
          const response = await fetch('/cards.json');
          const jsonData = await response.json();
          setData(jsonData);

          if (jsonData.length === 1000) {
            const endTime: number = performance.now();
            const totalTime: number = endTime - startTime;
            console.log(`${count}: ${totalTime}`);

            const dataString: string | null = localStorage.getItem('data');
            const prevArr: number[] = dataString ? JSON.parse(dataString) : [];
            prevArr.push(totalTime);
            localStorage.setItem('data', JSON.stringify(prevArr));
            localStorage.setItem('measurementCount', (count + 1).toString());

            setMeasurementCount(count + 1);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }

        setTimeout(() => {
          setData([]);
          setStartTime(performance.now()); 
        }, 3000);
      }
    };

    fetchData();
  }, [measurementCount]); 

  useEffect(() => {
    if (measurementCount === MAX_COUNT) {
      const dataString: string | null = localStorage.getItem('data');
      if (dataString) {
        const blob: Blob = new Blob([dataString], { type: 'application/json' });
        const url: string = URL.createObjectURL(blob);
        const link: HTMLAnchorElement = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'measurement.json');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }
  }, [measurementCount]); 

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
