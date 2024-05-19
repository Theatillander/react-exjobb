import Card from './Card';
import '../style/products.css';
import React, { useState, useEffect } from 'react';

/*
  OBS! 
  För att skapa en ny mätserie måste man först gå in i localstorage -> "clear all", sedan kan scriptet starta
  När koden är klar laddar den ner ".json" som innehåller alla mätvärden.
*/
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

  const [data, setData] = useState([]);

  const startTime = performance.now();

if (!localStorage.getItem('measurementCount')) {
  localStorage.setItem('measurementCount', '0');
}


  if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify([]));
  }
  
  const countString = localStorage.getItem('measurementCount');
  const count = countString ? parseInt(countString) : 0;
  

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

        const dataString = localStorage.getItem('data');
        const prevArr = dataString ? JSON.parse(dataString) : null;        
        prevArr.push(totalTime);
        localStorage.setItem('data', JSON.stringify(prevArr));
        console.log(prevArr);
    
        localStorage.setItem('measurementCount', (count + 1).toString());
      }
  
      setTimeout(() => {
        setData([]);
      }, 3000);
    }

    else if (count === MAX_COUNT) {
      const dataString = localStorage.getItem('data');
      if (dataString) {
        const blob = new Blob([dataString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'measurement.js');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        console.error('Data is not available in localStorage');
      }
    }

  }, [data])

  const ProductPageProducts: React.FC<{ data: CardData[] }> = ({ data }) => {
  return (
    <div className='gallery'>
       {data.map(item =>{ /* map kör funktionen för varje item i arrayen, dvs det som är i min contents.jsx  */
        return (
          <Card
            id={item.id}
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