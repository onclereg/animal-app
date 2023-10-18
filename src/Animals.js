import './Animals.css'
import beer from './image/beer.avif';
import dog from './image/dog.avif';
import eagle from './image/eagle.avif';
import elephant from './image/elephant.avif';
import fox from './image/fox.avif';
import panda from './image/panda.avif';
import sheep from './image/sheep.avif';
import tiger from './image/tiger.avif';
import tortoise from './image/tortoise.avif';

const imageMap = {
    beer,
    dog,
    eagle,
    elephant,
    fox,
    panda,
    sheep,
    tiger,
    tortoise
} 

function Animals({type}){
    return (
        <div className='animalCard'>
            <div className='innerCard'>
                <img  alt="image"  src={imageMap[type]} style={{height: 200, width:200 }}/>
            </div>
        </div>
)
};

export default Animals;