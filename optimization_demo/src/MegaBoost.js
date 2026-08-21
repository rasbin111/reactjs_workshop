import React from 'react';

function MegaBoost({ handleClick }) {
    console.info("Render Boxed " + new Date().toLocaleTimeString('en-US'));

    return (<>
        <button onClick={handleClick}> MEGA BOOST! </button>
    </>
    );
}

export default React.memo(MegaBoost);
