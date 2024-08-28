import pikchurs from './assets/res3c.jpg'
import pikchur from './assets/res20c1.jpg'
import pikchu from './assets/res10.jpg'
import img from './assets/res17c.jpg'
import img2 from './assets/res16c.jpg'
import Card from './card';
import { SearchBar } from './search'


function Food() {



    return(
    <>    
 <div className='container'>  

<carosuel className ="cara">
<button class="carousel-control next" onclick="nextSlide()">❯</button>
<img className="car"src={pikchurs} alt="doodoo" />



<img className="car"src={pikchur} alt="doodoo" />


<img className="car"src={pikchu} alt="doodoo" />
<img className="car"src={img} alt="doodoo" />
<img className="car"src={img2} alt="doodoo" />

<button class="carousel-control prev" onclick="prevSlide()">❮</button>
        

</carosuel>
</div>
<Card/>
</>
    );
}
export default Food