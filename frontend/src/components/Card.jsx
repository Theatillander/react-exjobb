import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useState } from 'react';
import "../style/card.css";
import { IconButton } from '@mui/material';

function Card(props) {

  const [favoriteHovered, setFavoriteHovered] = useState(false);
  const [bookmarkHovered, setBookmarkHovered] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const [bookmarkClicked, setBookmarkClicked] = useState(false);

  const handleFavoriteClick = () => {
    setFavoriteClicked(!favoriteClicked);
  };

  const handleBookmarkClick = () => {
    setBookmarkClicked(!bookmarkClicked);
  };


  return (

    <div key={props.id} className='card'> 
    <div className='top'>
        <ShoppingCartIcon className="productCard_cart" />
        <IconButton
          className="productCard_wishlist"
          onMouseEnter={() => setBookmarkHovered(true)}
          onMouseLeave={() => setBookmarkHovered(false)}
          onClick={handleBookmarkClick}
        >
          {(bookmarkClicked || bookmarkHovered) ? <BookmarkIcon style={{ color: "secondary" }} /> : <BookmarkBorderIcon />}
        </IconButton>
      
        <div className='hovereffect'>
          <IconButton
            className="ProductCard_fastSelling"
            onMouseEnter={() => setFavoriteHovered(true)}
            onMouseLeave={() => setFavoriteHovered(false)}
            onClick={handleFavoriteClick}
          >
            {(favoriteClicked || favoriteHovered) ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
          </IconButton>
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