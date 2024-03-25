import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useState } from 'react';
import "../style/card.css";
import { IconButton } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

function Card(props) {

  const [favoriteHovered, setFavoriteHovered] = useState(false);
  const [bookmarkHovered, setBookmarkHovered] = useState(false);
  const [CartHovered, setCartHovered] = useState(false);
  const [CartClicked, setCartClicked] = useState(false);

  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const [bookmarkClicked, setBookmarkClicked] = useState(false);

  const handleFavoriteClick = () => {
    setFavoriteClicked(!favoriteClicked);
  };

  const handleBookmarkClick = () => {
    setBookmarkClicked(!bookmarkClicked);
  };

  const handleCartClick = () => {
    setCartClicked(!CartClicked);
  };


  return (

<div key={props.id} className='card'> 

  <div className='top'>
    <IconButton
      className="ProductCard_fastSelling"
      onMouseEnter={() => setFavoriteHovered(true)}
      onMouseLeave={() => setFavoriteHovered(false)}
      onClick={handleFavoriteClick}
    >
      {(favoriteClicked || favoriteHovered) ? <FavoriteIcon style={{ color: "white" }} /> : <FavoriteBorderIcon style={{ color: "white" }} />}
    </IconButton>

    <div className='rightIcons'>
      <IconButton
        className="productCard_wishlist"
        onMouseEnter={() => setBookmarkHovered(true)}
        onMouseLeave={() => setBookmarkHovered(false)}
        onClick={handleBookmarkClick}
      >
        {(bookmarkClicked || bookmarkHovered) ? <BookmarkIcon style={{ color: "white" }} /> : <BookmarkBorderIcon style={{ color: "white" }}/>}
      </IconButton>

      <IconButton
        className="productCard_cart"
        onMouseEnter={() => setCartHovered(true)}
        onMouseLeave={() => setCartHovered(false)}
        onClick={handleCartClick}
      >
        {(CartClicked || CartHovered) ? <ShoppingCartIcon style={{ color: "white" }} /> : <ShoppingCartOutlined style={{ color: "white" }}/>}
      </IconButton>
    </div>
  </div>

      <img src={props.image} alt='products-img' className='image'></img>

      <div className='productCard_content'>
        <h3 className='productName'>{props.name}</h3>
          <div className='displayStack_1'>
            <div className='productPrice'>fr.{props.price}kr</div>
          </div>
        <div className='displayStack_2'></div>
          <div className='productRating'>
          {[...Array(props.rating)].map((index) => ( /* Skriver ut stjärnor beroende på vilken rating produkten har */
            <StarIcon style={{ color: "#ffe234" }} id={index +1} key={index} />
          ))}
          </div>
       <div className='productSales'>{props.totalSales} posters sold</div>
        </div>
      </div>
  );
}

export default Card;