import React from "react";

const Boxes = ({ boxes }) => {
    console.info("Render Boxes " + new Date().toLocaleTimeString());
    return (
        <div>
            {boxes.map((boxStyles, index) => (
                <div key={index} style={boxStyles} />
            ))}
        </div>
    )

}

export default React.memo(Boxes);
