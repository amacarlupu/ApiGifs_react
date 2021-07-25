import { React } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // Este es un llamado al custom hooks, me devolverá el arreglo con los gifs y
    // el estado del loading 
    const { data:images, loading } = useFetchGifs( category);

    // Si el loading es true, entonces hacer lo que está despues del ampersan &&,
    // si es falso, no hace nada
    // { loading && <p>Cargando data</p>} 

    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Cargando data</p>} 
            <div className="card-grid animate__animated animate__fadeIn">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} // operador spread envia cada propiedad por separado
                        />
                    ))
                }
            </div>
        </>
    )
}
