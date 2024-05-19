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

  const [data, setData] = useState<any[]>([]);

  const startTime = performance.now();

  if (!localStorage.getItem('measurementCount')) {
    localStorage.setItem('measurementCount', '0');
  }

  if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify([]));
  }
  
  const count = parseInt(localStorage.getItem('measurementCount') || '0', 10);


  useEffect(() => {

    if (count < MAX_COUNT){
      fetch('/cards.json')
        .then(response => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.error('Error fetching data:', error));

      if (data.length === 1000){ 
        const endTime = performance.now();
        const totalTime = endTime - startTime;
        console.log(`${count}: ${totalTime}`);

        let prevArr: number[] = JSON.parse(localStorage.getItem('data') || '[]');
        prevArr.push(totalTime);
        localStorage.setItem('data', JSON.stringify(prevArr));
        console.log(prevArr);
    
        localStorage.setItem('measurementCount', (count + 1).toString());
      }
  
      setTimeout(() => {
        setData([]);
      }, 3000);
    }

    else if (count === MAX_COUNT){
      const blob = new Blob([localStorage.getItem('data') || ''], { type: 'application/json' });
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
       {data.map(item =>{ 
        return (
          <Card
            key={item.id}
            id={item.id}
            price={item.price} 
            rating={item.rating}
            name={item.name}
            image={item.image}
            text={item.text} 
          />
        );
      })}
    </div>
  );
}

export default ProductPageProducts;