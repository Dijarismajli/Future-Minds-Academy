import React, { useState, useEffect } from 'react';

function Window() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup on component unmount
        };
    }, []); // Empty dependency array means this effect runs once after initial render


    return (
        <>

            <p>Window width:{windowWidth}</p>
        </>
    )
}

export default Window