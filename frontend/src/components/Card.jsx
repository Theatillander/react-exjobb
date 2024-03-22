import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React, { useState } from 'react';
import "../style/card.css";

function Card(props) {

  const [hovered, setHovered] = useState(false);

  return (

    <div key={props.id} className='card'> 
      <div className='top'>
        <ShoppingCartIcon className="productCard_cart"/>
        <BookmarkIcon className="productCard_wishlist"/>
        <div className='hovereffect'>
      <div className="ProductCard_fastSelling" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {hovered ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
    </div>
      </div>

      <img src={props.image} alt='products-img' className='image'></img>

      <div className='productCard_content'>
        <h3 className='productName'>{props.name}</h3>
        <div className='displayStack_1'>
          <div className='productPrice'>${props.price}</div>
          <div className='productSales'>{props.totalSales} posters sold</div>
        </div>
        <div className='displayStack_2'></div>
        <div className='productRating'>
          {[...Array(props.rating)].map((index) => ( /* Skriver ut stjärnor beroende på vilken rating produkten har */
            <StarIcon id={index +1} key={index} />
          ))}
        </div>
        <div className='productTime'>
          {props.timeLeft} days left
        </div>
      </div>

    </div>
  );
}

export default Card;