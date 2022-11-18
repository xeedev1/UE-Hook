import React, {useState, useEffect} from 'react';

function App() {
  const [resourceType, setResourceType] = useState('Posts');
  const [itemArray, setItemArray] = useState([]); 

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response => response.json())
  .then(json => setItemArray(json));
  },[resourceType]);
  return (
    <>
    <button onClick={()=>{setResourceType('Posts')}}>Posts</button>
    <button onClick={()=>{setResourceType('Users')}}>Users</button>
    <button onClick={()=>{setResourceType('Comments')}}>Comments</button>
    <h1>{resourceType}</h1>
    {itemArray.map(item=>{
      return <p>{JSON.stringify(item)}</p>
    })}
    </>
  )
}

export default App;
