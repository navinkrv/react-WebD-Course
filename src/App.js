import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Paragraph from './components/Paragraph';

function App() {
  // let num1;
  // let num2;
  
  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)

  const [isVisible,setIsVisible] = useState(false)

  function submitHandler(event){
    event.preventDefault()
    // num1 = event.target.num1.value
    // num2 = event.target.num2.value

    setNum1(event.target.num1.value)
    setNum2(event.target.num2.value)
  }

  function toggleHandler(){
    setIsVisible(!isVisible)
  }

  /*
     variables are two types in react
     normal variable - when changed it is just stored or modified in the memory and will not re-render the screen/page/component*

     state variable - when changed it re-renders the respective component


    - components
    - props (properties)
    - javasript (core coding)
    - navigation
    - npm packages
  */

    function name(){
      console.log("name")
    }
    name()

  return (
    <div>
       <Navbar/>
        <section style={{backgroundColor:isVisible?"red":"transparent"}}>
        <form onSubmit={submitHandler}>
          <input type="number" name="num1" />
          <input type="number" name="num2" />
          <input type="submit" value="submit" />
        </form>
          <div className="result">{num1+num2}</div>
       </section>
       

       <button onClick={toggleHandler}>Toggle</button>
       <Paragraph data="this is a paragraph" />
       <Paragraph data="this is a paragraph" />
       <Paragraph data="this is a paragraph" />
       <Paragraph data="this is a paragraph" />
       <Paragraph data="this is a paragraph" />
    </div>
  );
}

export default App;
