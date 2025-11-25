import './App.css'
import {Grid} from "@mui/material";
import React, {useState} from "react";
import {SingleCheckbox, SingleFloat, SingleInteger, SingleText} from "../../../src/components";

function App() {
    const [float, setFloat] = useState<number>(0);
    const [integer, setInteger] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Grid container>
            <Grid size={3}>
                {float}
                <SingleFloat
                    label='실수형'
                    min={-100} max={100}
                    get={float} set={setFloat}
                />
            </Grid>
            <Grid size={3}>
                {integer}
                <SingleInteger
                    label='정수형'
                    min={-100} max={100}
                    get={integer} set={setInteger}
                />
            </Grid>
            <Grid size={3}>
                {text}
                <SingleText
                    label='텍스트'
                    maxLength={10}
                    get={text} set={setText}
                />
            </Grid>
            <Grid size={3}>
                {checked.toString()}
                <SingleCheckbox
                    label='테스트'
                    get={checked} set={setChecked}
                />
            </Grid>
        </Grid>
    )
}

export default App
