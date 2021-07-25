import React from 'react'

// Recibo destructurizando los campos id, title y url del componente GifGrid
export const GifGridItem = ({id, title, url}) => {

    return (
        <div className='card'>
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
