// Esto es un componente custom hooks
import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

        // Esto hace que la funcion getGifs solo se ejecuta cuando el componente es 
        // renderizado por primera vez.
        useEffect(() => {

                getGifs(category)
                .then(imgs => setState({
                    data: imgs,
                    loading: false
                }));
            
        }, [category]);

 

    return state; // { data:[imgs], loading: true }
}