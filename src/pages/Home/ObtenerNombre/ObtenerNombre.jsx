import React, { useState } from 'react';

export function ObtenerNombre(props) {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState('');

    const getName = async () => {
        const response = await fetch('https://randomuser.me/api/');
        const responseJson = await response.json();

        if (responseJson.results) {
            const { first, last } = responseJson.results[0].name;
            setErrors('');
            setName(`${first} ${last}`);
        } else {
            setErrors('Ocurrió un error al obtener el nombre');
        }
    }
    return (
        <div className='App'>
            <button type="button" className='btn btn-dark' onClick={getName}>Obtener nombre</button>
            {name && <h4>{name}</h4>}
            {errors !== '' && <p>{errors}</p>}
        </div>
    );
}
