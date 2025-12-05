import { Grid, InputAdornment, TextField } from "@mui/material";
import { ObjCheckbox, ObjCheckIcon, ObjFloat, ObjInteger, ObjText } from "mui-fast-start";
import { useState } from "react";

type TempType = {
    check1: boolean,
    check2: boolean,
    float: number,
    integer: number,
    text: string
}

const ObjPage = () => {
    const [error, setError] = useState<object>({
        text: '에러 메시지',
    })
    const [temp, setTemp] = useState<TempType>({
        check1: false,
        check2: false,
        float: 0,
        integer: 0,
        text: ''
    });

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTemp({...temp, text: e.target.value});
    }

    return (
        <Grid container>
            <TextField
                fullWidth={true}
                autoComplete="off"
                size="small"
                variant="outlined" 
                label='테스트'
                value={temp.text}
                onChange={handleTextChange}
            />

            <Grid size={12}>
                {JSON.stringify(temp)}
            </Grid>

            <Grid size={2}>
                <ObjCheckbox<TempType>
                    label='테스트1' name='check1'
                    get={temp} set={setTemp}
                />
            </Grid>
            <Grid size={2}>
                <ObjCheckIcon<TempType>
                    on='on' off='off' name='check2'
                    get={temp} set={setTemp}
                />
            </Grid>

            <Grid size={2}>
                <ObjFloat<TempType>
                    label='실수형' name='float'
                    get={temp} set={setTemp}
                    errorData={error}
                />
            </Grid>
            <Grid size={2}>
                <ObjInteger<TempType>
                    label='정수형' name='integer'
                    get={temp} set={setTemp}
                    errorData={error}
                />
            </Grid>
            <Grid size={2}>
                <ObjText<TempType>
                    label='텍스트' name='text'
                    get={temp} set={setTemp}
                    errorData={error}
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
                />
            </Grid>
        </Grid>
    );
};

export default ObjPage;