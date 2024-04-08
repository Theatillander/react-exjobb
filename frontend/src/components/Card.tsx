import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import '../style/card.css';


interface CardProps {
  id: number;
  image: string;
  name: string; 
  text: string;
  price: number;
  rating: number;
}


function Card(props: CardProps) {
  const [favoriteHovered, setFavoriteHovered] = useState(false);
  const [bookmarkHovered, setBookmarkHovered] = useState(false);
  const [cartHovered, setCartHovered] = useState(false);
  const [favoriteClicked, setFavoriteClicked] = useState(false);
  const [bookmarkClicked, setBookmarkClicked] = useState(false);
  const [cartClicked, setCartClicked] = useState(false);

  const handleFavoriteClick = () => {
    setFavoriteClicked(!favoriteClicked);
  };

  const handleBookmarkClick = () => {
    setBookmarkClicked(!bookmarkClicked);
  };

  const handleCartClick = () => {
    setCartClicked(!cartClicked);
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
            {(cartClicked || cartHovered) ? <ShoppingCartIcon style={{ color: "white" }} /> : <ShoppingCartOutlinedIcon style={{ color: "white" }}/>}
          </IconButton>
        </div>
      </div>
      <img src={props.image} alt='products-img' className='image'></img>
      <div className='productCard_content'>
        <h3 className='productName'>{props.name}</h3>
        <p className='productText'>{props.text}</p>
        <div className='displayStack_1'>
          <div className='productPrice'>fr.{props.price}kr</div>
        </div>
        <div className='displayStack_2'></div>
        <div className='productRating'>
          {[...Array(props.rating)].map((_, index) => (
            <StarIcon style={{ color: "black" }} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
