import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Card(props) {
  return (
    <div className='productList'>
      <div key={props.id} className='productCard'> 

        <img src={props.image} alt='products-img' className='productImage'></img>
        <ShoppingCartIcon className={"productCard_wishlist"}/>
        <FavoriteBorderIcon className={"ProductCard_fastSelling"}/>

        <div className='productCard_content'>
          <h3 className='productName'>{props.name}</h3>
          <div className='displayStack_1'>
            <div className='productPrice'>${props.price}</div>
            <div className='productSales'>{props.totalSales} units sold</div>
          </div>
          <div className='displayStack_2'></div>
          <div className='productRating'>
            {[...Array(props.rating)].map((index) => ( /* Skriver ut stjärnor beroende på vilken rating produkten har */
              <StarIcon id={index +1} key={index} />
            ))}
          </div>
          <div className='productTime'>{props.timeLeft} days left
          </div>
        </div>
      </div>
    </div>
        
  );
}

export default Card;