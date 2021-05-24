import React, { useRef, useState } from 'react';
import {IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { v4 } from 'uuid';
import styles from './styles.module.scss';
import Frame from '../Frame';
import { ICarousel } from './interface';
import Diamond from '../Diamond';

const Carousel: React.FC<ICarousel> = ({
    width,
    height,
    start,
    max,
    diamonds = false,
    frame,
    children
}) => {
   const carouselRef = useRef<HTMLDivElement>();
   const [diamond, setDiamond] = useState<number>(start);
   const diamondsArray= new Array(max).fill('');

   const handleScroll = (direction: 'right' | 'left') => {
       if(direction === 'left'){
           setDiamond((prevState) => prevState === 1 ? 1 : prevState - 1);
           carouselRef.current.scrollLeft -= height;
           return;
       }
       setDiamond((prevState) => prevState === max ? max : prevState + 1);
       carouselRef.current.scrollLeft += height;
   };

   const handleChangeDiamond = (index: number) => {
       if(index === diamond)
           return;
       
       let steps = index - diamond;

       if(steps > 0){
           for(let i = 0; i < steps; i++){
               handleScroll('right');
           }
           return;
       }

       steps = steps * -1;

       for(let i = 0; i < steps; i++){
           handleScroll('left');
       }
   };

  return (
    <Frame style={{width: `${width}px`, height: `${height}px`}}
        {...frame}
    >
        <div className={styles.carouselContainer}>
            <IoIosArrowBack size={32} color="var(--white)" 
                className={styles.arrowLeft}
                onClick={(e) => { e.preventDefault(); handleScroll('left'); }}
            />
            <div ref={carouselRef} className={styles.carousel} style={{width: `${width}px` }}>
                {children}
            </div>
            <IoIosArrowForward size={32} color="var(--white)" 
                className={styles.arrowRight}
                onClick={(e) => { e.preventDefault(); handleScroll('right'); }}
            />
            {diamonds && (
                <div className={styles.diamonds}>
                    {diamondsArray.map((_, index: number) => <Diamond key={v4()} size={16} color="var(--primary)" fill={diamond === (index + 1) ? "var(--blue" : ""} onClick={() => handleChangeDiamond(index + 1)} /> )}
                </div>
            )}
        </div>
    </Frame>
  );
}

export default Carousel;