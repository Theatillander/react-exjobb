import Card from './Card';
import '../style/products.css';
import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  price: number;
  rating: number;
  text: string;
  image: string;
  name: string;
}

function ProductPageProducts() {
  const [data, setData] = useState<Product[]>([]);
  const startTime = performance.now();

  useEffect(() => {
    const fetchData = () => {
      fetch('/cards.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((jsonData: Product[]) => {
          setData(jsonData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setData([]); // or handle error state
        });
    };

    fetchData(); // Initial fetch
    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (data.length === 1000) {
      const endTime = performance.now();
      const totalTime = endTime - startTime;
      console.log(`${totalTime}`);
    }
  }, [data, startTime]);

  return (
    <div className='gallery'>
      {data.map(item => (
        <Card
          key={item.id}
          id={item.id} 
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
