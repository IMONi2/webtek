import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function AnimatedText() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            style={{
                fontSize: hovered ? '24px' : '16px',
                color: hovered ? 'blue' : 'black',
                transition: 'all 0.3s ease'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Hover over me!
        </div>
    );
}

ReactDOM.render(<AnimatedText />, document.getElementById('animated-text-container'));
