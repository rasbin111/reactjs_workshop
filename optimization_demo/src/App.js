import React from 'react';

import Boxes from './Boxes';


function App() {
    const [name, setName] = React.useState('');
    const [boxWidth, setBoxWidth] = React.useState(1);

    const id = React.useId();

    const boxes = React.useMemo(() => {
        return [
            {
                flex: boxWidth,
                background: "red",
            },
            {
                flex: 3,
                background: "blue",
            },
            {
                flex: 1,
                background: "yellow",
            }
        ];
    }, [boxWidth]);

    return (
        <>
            <Boxes boxes={boxes} />
            <section>
                <div>
                    <label htmlFor={`${id}-name`}>
                        Name:
                    </label>
                    <input
                        id={`${id}-name`}
                        type="text"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value)
                        }}
                    />
                    <input
                        id={`${id}-box-width`}
                        type="range"
                        min={1}
                        max={5}
                        step={0.01}
                        value={boxWidth}
                        onChange={(event) => {
                            setBoxWidth(
                                Number(event.target.value)
                            );
                        }}
                    />
                </div>
            </section>
        </>
    )

}

export default App
