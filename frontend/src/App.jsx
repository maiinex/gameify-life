import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
    .then(res => res.json())
    .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>

  )
}

export default App
