import './App.css'
import {Grid} from "@mui/material";
import React, {useState} from "react";
import SingleFloat from "../../../src/components/Single/Textfield/SingleFloat.tsx";
import SingleInteger from "../../../src/components/Single/Textfield/SingleInteger.tsx";

function App() {
    const [float, setFloat] = useState<number>(0);
    const [integer, setInteger] = useState<number>(0);

    return (
        <Grid container margin='0 0 auto 0'>
            <Grid size={6}>
                {float}
                <SingleFloat
                    label='실수형'
                    min={-100} max={100}
                    get={float} set={setFloat}
                />
            </Grid>
            <Grid size={6}>
                {integer}
                <SingleInteger
                    label='정수형'
                    min={-100} max={100}
                    get={integer} set={setInteger}
                />
            </Grid>
        </Grid>
    )
}

export default App
