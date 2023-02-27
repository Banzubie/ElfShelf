import { useState, useEffect } from 'react'

function Gifts() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const pictures = [
    'src/assets/giftImg/WOOD PUZZLE.png',
    'src/assets/giftImg/USB NIGHT LIGHT.png',
    'src/assets/giftImg/ROTATING STAR LIGHT PROJECTION LAMP.png',
    'src/assets/giftImg/RETRO MOTORCYCLE ALARM CLOCK.png',
    'src/assets/giftImg/OWLS BROACH.png',
    'src/assets/giftImg/M0M HEART RING.png',
    'src/assets/giftImg/LIGHT UP TOP.png',
    'src/assets/giftImg/LADIES WATCH.png',
    'src/assets/giftImg/FOUNTAIN PEN AND BALL POINT PEN GIFT SET.png',
    'src/assets/giftImg/FINGERTIP MONSTER GYRO.png',
    'src/assets/giftImg/FAMILY PENS.png',
    'src/assets/giftImg/FABRIC HOLIDAY WREATH.png',
    'src/assets/giftImg/DINOSAUR GEL PENS.png',
    'src/assets/giftImg/CRYSTAL MOM HEART NECKLACE.png',
    'src/assets/giftImg/CELL PHONE PURSE.png',
    'src/assets/giftImg/CAT PENDANT BRACELET.png'
  ];

  const nextPict = () => {
    if (index === pictures.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  }

  const prevPict = () => {
    if (index === 0) {
      return setIndex(pictures.length - 1);
    }
    return setIndex(index - 1);
  }
  useEffect(() => {
    const interval = setInterval(nextPict, 3000)

    return () => clearInterval(interval)
  })
  return (
    <div className='giftsContainer'>
      <div className='carouselBox'>
        <button className='carouselPrev' onClick={prevPict}>{'<'}</button>
        <div className='carousel'>
          {pictures.map((pict, idx) => {
            return <img className='carouselImg' src={pict} style={{ transform: `translate(-${index * 100}%)` }} key={idx}></img>
          })}
        </div>
        <button className='carouselNext' onClick={nextPict}>{'>'}</button>
      </div>
      <p>
        The Elf Shelf<span className="sup">&reg;</span> Holiday Shop gifts are selected by a team of purchasers during a two-week merchandising trip every January. After a variety of gifts are selected, SchoolPals (an authorized rep of The Elf Shelf<span className="sup">&reg;</span> Holiday Shop) participates in a process to discuss which gifts should be chosen.  The selected gifts then go through an independent testing process. All of The Elf Shelf<span className="sup">&reg;</span> Holiday Shop gifts must pass quality control and the Federal CPSIA testing requirements to be included in our gift line. Test results are available upon request.

        100% Gift Guarantee – If at any time a gift is damaged, simply contact us and a replacement will be shipped directly to the purchaser free of charge.  No questions asked!
      </p>
      <img src='src/assets/ElfGifts.png' className='GiftsElfPic'></img>
    </div>
  )
}

export default Gifts