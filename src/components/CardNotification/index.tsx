import React from 'react';
import Frame from '../Frame';
import TitleSecondary from '../TitleSecondary';
import { ICardNotification } from './interface';

const CardNotification: React.FC<ICardNotification> = ({
    availableIn,
    item,
    imageSrc
}) => {
  return (
    <Frame
        layout={{
            noSharpEdges: true
        }}
        style={{
            margin: '10px 0',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
    >
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '300px'
            }}
        >

            <Frame 
                layout={{
                    noSharpEdges: true,
                    square: true
                }}
                style={{
                    maxWidth: '80px',
                    height: '80px',
                    width: '80px'
                }}
            >
                <img src={imageSrc} alt="Notification Image"
                    style={{width: '100%'}}
                />
            </Frame>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly'
                }}
            >
                <TitleSecondary >{item.title}</TitleSecondary>
                <TitleSecondary type="subtitle">{item.subtitle}</TitleSecondary>
            </div>
        </div>
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly'
            }}
        >
            <TitleSecondary style={{margin: 0}}>{availableIn.title}</TitleSecondary>
            <TitleSecondary type="subtitle" style={{margin: 0}}>{availableIn.subtitle}</TitleSecondary>
        </div>
        <div style={{width: '20%', maxWidth: '270px'}}></div>
    </Frame>
  );
}

export default CardNotification;