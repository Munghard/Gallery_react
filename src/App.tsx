import { motion } from 'framer-motion';
import './App.css'
import Gallery from './Gallery';
import { useEffect, useState } from 'react';


function App() {

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    let list: string[] = [];

    for (let index = 0; index < 20; index++) {
      list.push(`https://picsum.photos/seed/${index}/576/576`);
    }
    setImageUrls(list);
  }, [])

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex'>

        <motion.h1
          initial={{ scale: 0, transform: 'TranslateX(-1000px)' }}
          animate={{ scale: 1, transform: 'TranslateX(0px)' }}
          transition={{ duration: 1, type: 'spring' }}
          className='text-7xl! text-gray-400 font-mono mb-10'>Gallery</motion.h1>
        <motion.svg
          className={'absolute -z-1'}
          width="300"
          height="300"
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="10" stdDeviation="3" floodColor="black" floodOpacity="0.5" />
            </filter>
          </defs>
          <motion.circle
            r={50} cx={50} cy={50}
            style={{ fill: '#555', filter: 'url(#shadow)' }}
            initial={{ opacity: 0.8, transform: 'TranslateX(0px)' }}
            animate={{ opacity: 1, transform: 'TranslateX(100%)' }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>

      <div className='flex gap-5 place-content-between'>
        <Gallery imageUrls={imageUrls} sizeX={2} sizeY={2} slotSize={64} title={'Tits'} />
        <Gallery imageUrls={imageUrls} sizeX={4} sizeY={2} slotSize={64} title={'Balls'} />
        <Gallery imageUrls={imageUrls} sizeX={3} sizeY={2} slotSize={64} title={'Scrotes'} />
        <Gallery imageUrls={imageUrls} sizeX={2} sizeY={2} slotSize={32} title={'69'} />
      </div>

      <div className='flex gap-5 place-content-between'>
        <Gallery imageUrls={imageUrls} sizeX={4} sizeY={4} slotSize={128} title={'Nipples'} />
        <div className='flex flex-col gap-5 place-content-between'>
          <Gallery imageUrls={imageUrls} sizeX={4} sizeY={2} slotSize={96} title={'Foreskin'} />
          <Gallery imageUrls={imageUrls} sizeX={4} sizeY={2} slotSize={96} title={'Pubes'} />
        </div>
      </div>
      <Gallery imageUrls={imageUrls} sizeX={6} sizeY={1} slotSize={160} title={'Rectums'} />
    </div>
  )
}

export default App
