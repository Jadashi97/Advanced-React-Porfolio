import React, { useEffect, useState } from 'react';


// We can use the HOCs(higher Order Components) to add some features 
// like analysing what where a client moves mouse
const MousePosition = ({render})=> {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(()=> {
        const handleMousePositionChange = (e) =>{
            // Use e.clientX and e.clientY to access the mouse position on the screen
            setMousePosition({
                x:e.clientX,
                y: e.clientY,
            });
        }

        window.addEventListener("mousemove", handleMousePositionChange);

        return () => {
            window.removeEventListener("mousemove", handleMousePositionChange);
        };
    }, []);

  // What should be returned here?
    return render({mousePosition});
};

// This component should not receive any props
const PanelMouseLogger = ()=> {
  // The below if statement can be removed after the render props pattern is implemented
    return (
        <div className='BasicTracker'>
            <p>Mouse Position</p>
            <MousePosition
                render ={({mousePosition}) => (
                    <div className='Row'>
                        <span>x: {mousePosition.x}</span>
                        <span>y: {mousePosition.y}</span>
                    </div>
                )}
            />
        </div>
    );
};

// This component should not receive any props
const PointMouseLogger = () =>{
  // The below if statement can be removed after the render props pattern is implemented
    return(
        <MousePosition
            render = {({mousePosition}) => (
                <p>
                    ({mousePosition.x}, {mousePosition.y})
                </p>
            )}
        />
    );

};


export default function LearnHocRender() {
  return (
    <div className='App'>
        <header className='Header'>Mama's Restaurant</header>
        <PanelMouseLogger/>
        <PointMouseLogger/>
    </div>
  );
}
