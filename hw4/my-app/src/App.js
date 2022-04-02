import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './Components/List';

function App() {
  const [photos, setPhotos] = useState([])
    useEffect(() => {
        const loadPost = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20')
            let data = await response.json()
            setPhotos(data);
            
        }

        loadPost();
    }, []);
 
  return (
    <div className='image-card' >
     <List list={photos}/>
    </div>
  );
}

export default App;



