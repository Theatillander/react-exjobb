import Card from './Card';
import '../style/products.css';
import React, { useState, useEffect } from 'react';
const jsonData = ('frontend/public/cards.json');

function ProductPageProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/cards.json') // Fetch JSON data from the public folder
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div className='gallery'>
       {data.map(item =>{ /* map kör funktionen för varje item i arrayen, dvs det som är i min contents.jsx  */
        return (
          <Card
            key={item.id} /* key för att identifiera om något ändrats, lagts till, eller tagits bort. Ger element en identitet.*/
            price={item.price} /* Här använder vi props för att hämta priset på produkten*/
            rating={item.rating}
            name={item.name}
            image={item.image}
            text={item.text} // Pass text property as prop
          />
        );
      })}
    </div>
  );
}

export default ProductPageProducts;