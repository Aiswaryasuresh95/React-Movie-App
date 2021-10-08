import HomePage  from "./UI/HomePage";
import HeaderComponent  from "./Components/HeaderComponent";


import './App.css'
require('dotenv').config()
console.log(process.env.REACT_APP_API_KEY)

const  App =() => {
  return (
    <div>
      <HeaderComponent />
       <HomePage />
    </div>
  
  );
}

export default App;
