interface SlotProps {
    size: number;
    index: number;
    randomIndex: number;
}
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Slot: React.FC<SlotProps> = ({ size, randomIndex, index }) => {


    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <AnimatePresence>
                {showModal &&

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setShowModal(false)}
                        className='fixed inset-0 z-998 flex items-center justify-center bg-black/90 backdrop-blur-sm'>
                        <div className='flex flex-col'>
                            <motion.img
                                initial={{ scale: 0, transform: 'TranslateX(-500px)' }}
                                animate={{ scale: 1, transform: 'TranslateX(0px)' }}
                                exit={{ scale: 0, transform: 'TranslateX(500px)' }}
                                transition={{ duration: 0.1, ease: 'easeInOut' }}
                                className={`max-h-xl max-w-xl rounded-md z-998 border-2 border-zinc-900`}
                                src={`https://picsum.photos/seed/${randomIndex}/576/576`}
                                alt="Icon"
                                onClick={() => setShowModal(false)}
                            />
                            <p className='text-xl text-zinc-400'>Image title</p>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

            <motion.img
                initial={{ opacity: 0, transform: "translateY(100px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 1, delay: index / 10 }}
                width={size}
                height={size}
                className={`border-2 border-zinc-500/20 hover:border-zinc-200/50 rounded-sm bg-zinc-800 hover:bg-zinc-700 shadow-md shadow-black/50`}
                src={`https://picsum.photos/seed/${randomIndex}/${size}/${size}`}
                alt="Icon"
                onClick={() => setShowModal(!showModal)}
            />
        </>
    )
}
export default Slot;