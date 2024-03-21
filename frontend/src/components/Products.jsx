import Card from './Card';
import '../style/products.css';

function Products() {

  const data = [
    {
      id: 1,
      name: "FLOWER LEAVES - POSTER 1",
      image: "images/posterpicture1.jpg",
      productType: "Poster 1",
      price: 220,
      rating: 5,
      timeLeft: 27,
      totalSales: 102
    },
    {
        id: 2,
        name: "FLOWER LEAVES - POSTER 2",
        image: "images/posterpicture2.jpg",
        productType: "Poster 2",
        price: 250,
        rating: 3,
        timeLeft: 27,
        totalSales: 42
    },
    {
        id: 3,
        name: "FLOWER LEAVES - POSTER 3",
        image: "images/posterpicture3.jpg",
        productType: "Poster 3",
        price: 220,
        rating: 2,
        timeLeft: 27,
        totalSales: 24
    },
    {
      id: 3,
      name: "FLOWER LEAVES - POSTER 4",
      image: "images/posterpicture4.jpg",
      productType: "Poster 4",
      price: 220,
      rating: 2,
      timeLeft: 27,
      totalSales: 47
  },
  ];

  return (
    <div className='gallery'>
       {data.map(item =>{ /* map kör funktionen för varje item i arrayen, dvs det som är i min contents.jsx  */
        return (
          <Card
            key={item.id} /* key för att identifiera om något ändrats, lagts till, eller tagits bort. Ger element en identitet.*/
            price={item.price} /* Här använder vi props (diskproppen) för att hämta priset på produkten*/
            rating={item.rating}
            totalSales={item.totalSales}
            timeLeft={item.timeLeft}
            name={item.name}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default Products;