import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['corgi']);

    // Funcion para añadir un nuevo valor al arreglo
    // const handleAdd = () => {
    //     setCategories(
    //         [...categories, 'batman']
    //     )
    //     // Otra solucion, el cats es el valor del estado anterior y retorna el nuevo estado
    //     // cats => [...categories, 'batman'] // a categories se le añade el nuevo valor
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />)
                }
            </ol>
        </>
    )
};


