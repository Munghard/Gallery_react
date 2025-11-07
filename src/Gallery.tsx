import Slot from './Slot'

interface GalleryProps {
    title?: string;
    slotSize: number;
    sizeX: number;
    sizeY: number;
}

const Gallery: React.FC<GalleryProps> = ({ title, slotSize, sizeX, sizeY }) => {

    return (
        <div className="flex flex-col w-fit h-fit gap-1 border-2 border-zinc-500/20 p-2 rounded-sm bg-zinc-800 shadow-md">
            <div className='flex justify-center'>
                <h1 className='text-xl text-gray-400'>{title}</h1>
            </div>
            {Array.from({ length: sizeY }).map((_, y) => (
                <div key={y} className="flex gap-1 w-fit h-fit">
                    {Array.from({ length: sizeX }).map((_, x) => (
                        <Slot
                            key={x + y}
                            index={y * sizeX + x}
                            randomIndex={Number((Math.random() * 1000).toFixed(0))}
                            size={slotSize} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Gallery;