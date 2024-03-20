import Card from './Card';

function Products() {

  const data = [
    {
      id: 1,
      name: "SLAY QUEEN",
      image: 
      "",
      productType: "product",
      price: 220,
      rating: 5,
      timeLeft: 27,
      totalSales: 4749
    },
    {
        id: 2,
        name: "SLAY QUEENIE",
        image: 
        "",
        productType: "producties",
        price: 250,
        rating: 3,
        timeLeft: 27,
        totalSales: 4749
    },
    {
        id: 3,
        name: "SLAY QUEENIE",
        image: 
        "",
        productType: "producties",
        price: 220,
        rating: 2,
        timeLeft: 27,
        totalSales: 4749
    },
    {
        id: 4,
        name: "SLAY QUEENIE!!!",
        image: 
        "",
        productType: "producties",
        price: 220,
        rating: 5,
        timeLeft: 27,
        totalSales: 4749
    }
  ];

  return (
    data.map(item =>{ /* map kör funktionen för varje item i arrayen, dvs det som är i min contents.jsx  */
      return (
        <Card
          key={item.id} /* key för att identifiera om något ändrats, lagts till, eller tagits bort. Ger element en identitet.*/
          price={item.price} /* Här använder vi props (diskproppen) för att hämta priset på produkten*/
          rating={item.rating}
        />
      );
    })
  );
}

export default Products;