import '../style/AdSection.css';

function AdSection() {

    return (
        <div class="container_cardsection">
            <div class="cards_cardsection">
                <div class="cardsection"> 
                <img src="/images/addimage2.jpg" alt="Image 1" />
                <div className="card-content">
                    <p className="p-class">ESSENTIAL POSTERS</p>
                        <h3>20% Off All Frames</h3>
                            <button class="card-btn">SHOP NOW</button>
                    </div>
                </div>
                    <div class="cardsection">
                    <img src="/images/addimage.jpg" alt="Image 1" />
                        <div className="card-content">
                            <h3>10% Off First Order</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button class="card-btn">SHOP NOW</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default AdSection;