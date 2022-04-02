import React from 'react'
import { Card } from './Card';

export const List = ({list}) => {
    return (
        <>
            {list.map((item) => (
                <img src = {item.url} className='image-card' />
            ))}
        </>
    );
};
 