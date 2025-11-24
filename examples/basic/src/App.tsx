import './App.css'
import {Grid} from "@mui/material";
import React, {useState} from "react";
import SingleFloat from "../../../src/components/Single/Textfield/SingleFloat.tsx";
import SingleInteger from "../../../src/components/Single/Textfield/SingleInteger.tsx";
import {SingleText} from "../../../src/components";

function App() {
    const [float, setFloat] = useState<number>(0);
    const [integer, setInteger] = useState<number>(0);
    const [text, setText] = useState<string>('');
    return (
        <Grid container>
            <Grid size={4}>
                {float}
                <SingleFloat
                    label='실수형'
                    min={-100} max={100}
                    get={float} set={setFloat}
                />
            </Grid>
            <Grid size={4}>
                {integer}
                <SingleInteger
                    label='정수형'
                    min={-100} max={100}
                    get={integer} set={setInteger}
                />
            </Grid>
            <Grid size={4}>
                {text}
                <SingleText
                    label='텍스트'
                    maxLength={10}
                    get={text} set={setText}
                />
            </Grid>
        </Grid>
    )
}

export default App
