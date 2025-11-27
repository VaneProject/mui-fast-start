import { Grid, InputAdornment, TextField } from "@mui/material";
import { SingleCheckbox, SingleCheckIcon, SingleFloat, SingleInteger, SingleText } from "mui-fast-start";
import React, { useState } from "react";

const SinglePage = () => {
    const [float, setFloat] = useState<number>(0);
    const [integer, setInteger] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);



    return (
        <Grid container>
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

            <Grid size={2}>{float}</Grid>
            <Grid size={2}>
                <SingleFloat
                    label='실수형'
                    min={-100} max={100}
                    get={float} set={setFloat}
                />
            </Grid>

            <Grid size={2}>{integer}</Grid>
            <Grid size={2}>
                <SingleInteger
                    label='정수형'
                    min={-100} max={100}
                    startAdornment={(
                        <InputAdornment position="start">
                            S
                        </InputAdornment>
                    )}
                    endAdornment={(
                        <InputAdornment position="end">
                            E
                        </InputAdornment>
                    )}
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
        </Grid>
    );
};

export default SinglePage;
