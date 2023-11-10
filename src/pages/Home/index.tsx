import { HomeContainer, LetterPaper } from './styles'
import { Stage, Layer, Image } from 'react-konva'
import { exportComponentAsPNG } from 'react-component-export-image'
import useImage from 'use-image'

import g1 from '../../assets/green1.webp'
import g2 from '../../assets/green2.webp'
import g3 from '../../assets/green3.webp'
import g4 from '../../assets/green4.webp'
import g5 from '../../assets/green5.webp'
import g6 from '../../assets/green6.webp'
import { useState, useRef } from 'react'

const greenStickers = [g1, g2, g3, g4, g5, g6]

function generateStickers() {
  return greenStickers.map((sticker, i) => ({
    id: i.toString(),
    x: Math.random() * 200,
    y: Math.random() * 600,
    rotation: Math.random() * 25,
    isDragging: false,
    image: sticker,
  }))
}

const INITIAL_STICKERS = generateStickers()

export function ImgSrc(imgUrl: string) {
  const [img] = useImage(imgUrl)
  return img
}

export function Home() {
  const [stickers, setStickers] = useState(INITIAL_STICKERS)
  const shapeRef = useRef(null)
  const componentRef = useRef(null)

  return (
    <HomeContainer ref={componentRef}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {stickers.map((sticker) => (
            <>
              <Image
                ref={shapeRef}
                key={sticker.id}
                id={sticker.id}
                x={sticker.x}
                y={sticker.y}
                src={sticker.image}
                rotation={sticker.rotation}
                draggable
                onDragStart={() => {
                  sticker.isDragging = true
                }}
                alt=""
                image={ImgSrc(sticker.image)}
              />
            </>
          ))}
        </Layer>
      </Stage>
      <LetterPaper>
        <div className="tape-section"></div>
        <div className="marge">
          <textarea></textarea>
        </div>
        <div className="tape-section"></div>
      </LetterPaper>
      <h2 onClick={() => exportComponentAsPNG(componentRef)}>save</h2>
    </HomeContainer>
  )
}
