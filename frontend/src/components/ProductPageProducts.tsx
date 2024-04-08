import Card from './Card';
import '../style/products.css';
import React, { useState, useEffect } from 'react';
const jsonData = ('frontend/public/cards.json');

interface ProductPageProps {
  id: number;
  price: number;
  rating: number;
  text: string;
  image: string;
  name: string;
}

function ProductPageProducts() {
  const [data, setData] = useState<ProductPageProps[]>([]);

  useEffect(() => {
    fetch('/cards.json') // Fetch JSON data from the public folder
      .then(response => response.json())
      .then((jsonData: ProductPageProps[]) => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <div className='gallery'>
       {data.map(item =>{ /* map kör funktionen för varje item i arrayen, dvs det som är i min contents.jsx  */
        return (
          <Card
            key={item.id} /* id is the key */
            price={item.price} /* passing id prop */
            rating={item.rating}
            name={item.name}
            image={item.image}
            text={item.text}
            id={item.id} />
        );
      })}
    </div>
  );
}

export default ProductPageProducts;