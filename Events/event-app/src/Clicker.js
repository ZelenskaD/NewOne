import React from 'react';

const Clicker = () => {
    const fireLasers = (e) =>{
        const data = { name: 'Willy Wonka', age: 9 };
        console.log(data)
        
        // console.log(e);
        // console.log("The lasers have been fired!");
        // console.log("ZAP! PEW PEW PEW");
    }
    return (
        <>
        <button onMouseOver={fireLasers}> Click Me!</button>
            <textarea onScroll={fireLasers} rows="2">
                Popa mopa koka lopa
                Popa mopa koka lopa
                Popa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopa
                Popa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopa
                Popa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopa
                Popa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopa
                Popa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopaPopa mopa koka lopa

            </textarea>
        </>
    )
}

export default Clicker;