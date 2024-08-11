import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import heart from './images/heart.svg';
import horse from './images/horse.svg';

const svgMap = {
  bird, cat, cow, dog, gator, heart, horse
}

function AnimalShow({type}) {
  return (
    <div>
      <img src={svgMap[type]} alt={type} />
    </div>
  )
}

export default AnimalShow
