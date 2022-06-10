// import bootstrap from 'bootstrap';
import './App.css';
import axios from 'axios';
import DogInfo from '../DogInfo/DogInfo';
import {useState} from 'react'
function App() {
// setup states variables
  const [dogBreed,setDogBreed] =useState('')
const [dogInfo,setDogInfo] =useState([])
  const handleChange=(e)=>{
    console.log(e.target.value)
    setDogBreed(e.target.value)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const baseUrl='https://api.thedogapi.com/'
    const query = 'v1/breeds/search?q='
    console.log('url',baseUrl+query+dogBreed)
    try{
      const response= await axios.get(baseUrl+query+dogBreed)
      setDogInfo(response.data)
      console.log('Response',response.data)
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <div className=" form-group " >
      <h1>Dog Shop</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="breed">Breed:</label>
        <input class="form-control input-sm" type="text" required value={dogBreed} onChange={handleChange} class="form-control" id="exampleInputName2" placeholder="Type Breed Name Here" />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <DogInfo dogInfo={dogInfo}/>
    </div>
  );
}
export default App;