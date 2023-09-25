import { FC } from 'react'
import CardDestinos from '../../../components/card.destinos';
import { Filters } from '../../../components/filters';
import { useLocation } from 'wouter';
export interface PropsDestination {
    
}

const Destination: FC<PropsDestination> = () => {
    const rows = 5;
    const cols = 5;
    const [, setLocation] = useLocation()

    return (
        <>
            <div className='flex justify-center'>
                <Filters />
            </div>
            <span>
                <div className="flex gap-4 justify-center mt-[1rem]">
                    {Array.from({ length: rows }).map((_, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col gap-4">
                            {Array.from({ length: cols }).map((_, colIndex) => (
                                <CardDestinos key={colIndex} onClick={() => { setLocation('/hotels') }} />
                            ))}
                        </div>
                    ))}
                </div>
            </span>
        </>
    )
}

export default Destination