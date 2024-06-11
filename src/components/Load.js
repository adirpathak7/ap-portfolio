import React, { useState, useEffect } from 'react';

const Load = () => {
    const [opacity, setOpacity] = useState(1.0);
    const reducer = 0.1;

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateOpacity(reducer);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const updateOpacity = (reducer) => {
        const updatedOpacity = opacity - reducer;
        if (updatedOpacity > 0) {
            document.getElementById('spin')?.style.setProperty('opacity', updatedOpacity);
            setOpacity(updatedOpacity);
        } else {
            document.getElementById('spin')?.style.setProperty('display', 'none');
            clearInterval();
        }
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center bg-black'>
            <div className="relative bg-purple-600 h-24 w-24 rounded-full animate-spin" id='spin'>
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-black h-2 w-2 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black h-2 w-2 rounded-full animate-none"></div>
                <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 bg-black h-2 w-2 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default Load;
