import React, { useState } from 'react';
import '../style/AdSection.css';

function AdSection() {        
    const [cards] = useState([
        {
            title: 'Free Shipping', 
            text: 'some example text',
            image: "images/posterpicture4.jpg",
            button: {
                text: "Information",
                onClick: () => {
                    // handle button click
                }
            }
        },
        {
            title: 'Free gift', 
            text: 'some example text',
            image: "images/posterpicture3.jpg",
            button: {
                text: "Click me",
                onClick: () => {
                    // handle button click
                }
            }
        }
    ]);

    return (
        <div>
            <section>
                <div className='container_cardsection'>
                    <div className='cards_cardsection'>
                        {cards.map((cardsection, i) => (
                            <div key={i} className='cardsection' style={{ backgroundImage: `url(${cardsection.image})` }}>
                                <h3>{cardsection.title}</h3>
                                <p>{cardsection.text}</p>
                                <button className="card-btn" onClick={cardsection.button.onClick}>{cardsection.button.text}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdSection;