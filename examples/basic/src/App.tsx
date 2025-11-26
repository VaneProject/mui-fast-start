import './App.css'
import {Divider, Grid} from "@mui/material";
import React, {useState} from "react";
import {
    ObjCheckbox,
    ObjCheckIcon,
    SingleCheckbox,
    SingleCheckIcon,
    SingleFloat,
    SingleInteger, SingleOutlinedFloat,
    SingleText
} from "../../../src/components";

type TempType = {
    check1: boolean,
    check2: boolean
}

function App() {
    const [float, setFloat] = useState<number>(0);
    const [integer, setInteger] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [temp, setTemp] = useState<TempType>({
        check1: false,
        check2: false
    });

    return (
        <Grid container>
            <Grid size={2}>{float}</Grid>
            <Grid size={2}>
                <SingleFloat
                    label='실수형'
                    min={-100} max={100}
                    get={float} set={setFloat}
                />
            </Grid>
            <Grid size={2}>
                <SingleOutlinedFloat
                    endAdornment='%'
                    label='outlined 실수형'
                    min={-100} max={100}
                    get={float} set={setFloat}
                />
            </Grid>

            <Grid size={2}>{integer}</Grid>
            <Grid size={2}>
                <SingleInteger
                    label='정수형'
                    min={-100} max={100}
                    get={integer} set={setInteger}
                />
            </Grid>

            <Grid size={2}>{text}</Grid>
            <Grid size={2}>
                <SingleText
                    label='텍스트'
                    maxLength={10}
                    get={text} set={setText}
                />
            </Grid>

            <Grid size={2}>{checked.toString()}</Grid>
            <Grid size={2}>
                <SingleCheckbox
                    label='테스트'
                    get={checked} set={setChecked}
                />
            </Grid>

            <Grid size={2}>{checked.toString()}</Grid>
            <Grid size={2}>
                <SingleCheckIcon
                    on={"on"} off={"off"}
                    get={checked} set={setChecked}
                />
            </Grid>

            <Grid size={12}>
                <Divider/>
            </Grid>

            <Grid size={2}>{temp.check1.toString()}</Grid>
            <Grid size={2}>
                <ObjCheckIcon<TempType>
                    on='on' off='off' name='check1'
                    get={temp} set={setTemp}
                />
            </Grid>

            <Grid size={2}>{temp.check2.toString()}</Grid>
            <Grid size={2}>
                <ObjCheckbox<TempType>
                    label='테스트2' name='check2'
                    get={temp} set={setTemp}
                />
            </Grid>
        </Grid>
    )
}

export default App
