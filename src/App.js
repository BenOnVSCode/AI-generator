import React, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  const [image, setImage] = useState('')

  const handleChange = () => {
    axios.get('https://api.generated.photos/api/v1/faces?api_key=wkssM7SgrguzGbYNgh3Djw&order_by=random').then(res => {
      const uri = res.data.faces[0].urls[4][512]
      uri && setImage(uri)
    }).catch(err => {
      
    })
  }
  return (
    <div className="App">
      <h1>AI Photo generator</h1>
      {image && <img src={image} alt='AI Face' />}
      <button type='button' onClick={handleChange}>
        New image
      </button>
    </div>
  );
}

export default App;
