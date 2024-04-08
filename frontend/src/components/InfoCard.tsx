import React, { useState } from 'react';
import '../style/InfoCard.css';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RedeemIcon from '@mui/icons-material/Redeem';
import PaymentIcon from '@mui/icons-material/Payment';

function InfoCard() {        
    const [cards] = useState([
        {
            title: 'Free Shipping', 
            text: 'some example text',
            icon: <LocalShippingIcon/>
        },
        {
            title: 'Free gift', 
            text: 'some example text',
            icon: <RedeemIcon/>
        },
        {
            title: 'Online Support', 
            text: 'some example text',
            icon: <QuestionAnswerIcon/>
        },
        {
            title: 'Flexible Payment', 
            text: 'some example text',
            icon: <PaymentIcon/>
        }
    ])
    return (
        <div>
            <section>
                <div className='container_infocard'>
                        <div className='cards_infocard'>
                            {
                            cards.map((infocard, i) =>(
                                <div key={i} className='infocard'>
                                    {infocard.icon}
                                    <h3>
                                        {infocard.title}
                                    </h3>
                                    <p>
                                        {infocard.text}
                                    </p>
                                </div> 
                                ))
                            }
                        </div>        
                </div>
            </section>
        </div>
    );
  }
  
  export default InfoCard;
  
