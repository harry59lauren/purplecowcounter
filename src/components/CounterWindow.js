import React, { useState, useEffect } from 'react';

function CounterWindow() {

    const [count, setCount] = useState(null);

    const incrementCounter = () => {
        fetch(
            `https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`, { method: "GET" }
  
          ).then(res => res.json())
           .then(response => {
              setCount(response.value);
            })
            .catch(error => console.log(error));
      };

    useEffect(() => {
        fetch(
          `https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`, { method: "GET" }

        ).then(res => res.json())
         .then(response => {
            setCount(response.value);
          })
          .catch(error => console.log(error));
      });
    
    return (
        <div className="container">
            <div className="WindowCounter" style = {WindowStyling}>
                <span>{ count }</span>
            </div>
            <button onClick={incrementCounter} className="Button"> JOIN THE FIGHT</button>
        </div>
    );
}



const WindowStyling = {
    backgroundColor: "rgba(116, 70, 239, 0.22)",
    height: "200px",
    width: "200px",
    borderRadius: "20px"
}

const ButtonStyling = {

}
export default CounterWindow;

