import React from 'react';

export default function () {
    const myFunc = () => {
        console.log("This is from the click.")
    }
    return (
        <div>
            <img src="https://code.org/images/social-media/hoc-2018-creativity.png" />
            <p onClick={() => myFunc()}> Hello from feature1 </p>
        </div>
    );
}