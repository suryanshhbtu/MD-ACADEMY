import React from 'react';
import ReactDOM from 'react-dom/client';  // importing ReactDOM from library
import App from './App';    // JS file does not require .js to be added

const root = ReactDOM.createRoot(document.getElementById('root'));  // root is id of div which is in public/index.html
root.render(<App />);                                               // what should be rendered inside that root(div) 


/*
Component -> Custom HTML Element (React is All About Components)
          -> break bi chunk of code into multiple smaller functions
          -> Reusability, Seprations of Concerns (one component focuses on a specific area).

DOM -> Document Object Model.
    -> API for HTML & XML document.
    -> Defines the logical structure of documents & 
       way a document is accessed and manipulated.


    
*/