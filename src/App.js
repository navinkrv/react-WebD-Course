import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Tree from './components/Tree';

function App() {

  
  const treeData = [
    {
      id: 1,
      name: "Node 1",
      children: [
        //first child
        {
          id: 2,
          name: "Node 1.1",
          children: [
            { id: 3, name: "Node 1.1.1" },
            { id: 4, name: "Node 1.1.2" },
            { id: 9, name: "Node 1.1.3" },
          ],
        },
        // second child
        { id: 5, name: "Node 1.2" },
        //third child
        {
          id: 6,
          name: "Node 1.3",
          children: [
            { id: 7, name: "Node 1.3.1" },
            { id: 8, name: "Node 1.3.2" },
          ],
        },
      ],
    },
  ];

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

    // states 
    // destructuring {objects}, [arrays]
    // exports (default and {non defaults} )
    // props is an object
    
  

  return (
    <div className='tree'>
       <Navbar/>
        <Tree data={treeData}/>
       
    </div>
  );
}

export default App;
