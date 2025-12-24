import {Divider, Grid, InputAdornment, TextField} from "@mui/material";
import {ObjCheckbox, ObjCheckIcon, ObjFloat, ObjInteger, ObjSelectOne, ObjSelectRecord, ObjText} from "mui-fast-start";
import React, { useState } from "react";

const list = ["test1", "test2", "test3", "test4", "test5"];

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
enum TestEnum {
    test = '테스트',
    hello = '안녕'
}

const TestRecord = {
    test: '테스트',
    hello: '안녕'
}

type TempType = {
    check1: boolean,
    check2: boolean,
    float: number,
    integer: number,
    text: string,
}

type SelectType = {
    item1: keyof typeof TestRecord;
    item2?: keyof typeof TestRecord;
    item3: keyof typeof TestEnum;
    item4?: keyof typeof TestEnum;
    item5: string;
    item6?: string;
}

const ObjPage = () => {
    const [error, setError] = useState<object>({
        text: '에러 메시지',
    });
    const [temp, setTemp] = useState<TempType>({
        check1: false,
        check2: false,
        float: 0,
        integer: 0,
        text: ''
    });

    const [select, setSelect] = useState<SelectType>({
        item1: 'test',
        item3: 'test',
        item5: list[0],
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
                    on='on' off='off' name={"check2"}
                    get={temp} set={setTemp}
                />
            </Grid>

            <Grid size={2}>
                <ObjFloat<TempType>
                    label='실수형' name='float'
                    get={temp} set={setTemp}
                    err={error}
                />
            </Grid>
            <Grid size={2}>
                <ObjInteger<TempType>
                    label='정수형' name='integer'
                    get={temp} set={setTemp}
                    err={error}
                />
            </Grid>
            <Grid size={2}>
                <ObjText<TempType>
                    label='텍스트' name='text'
                    get={temp} set={setTemp}
                    err={error}
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

            <Grid size={12}>
                <Divider/>
                {JSON.stringify(select)}
            </Grid>

            <Grid size={2}>
                <ObjSelectRecord
                    get={select} set={setSelect}
                    items={TestRecord}
                    name='item1' label='item1'
                />
            </Grid>
            <Grid size={2}>
                <ObjSelectRecord
                    get={select} set={setSelect}
                    items={TestRecord}
                    name='item2' label='item2'
                />
            </Grid>

            <Grid size={2}>
                <ObjSelectRecord
                    get={select} set={setSelect}
                    items={TestEnum}
                    emptyItem='빈 값' emptyValue={null}
                    name='item3' label='item3'
                />
            </Grid>
            <Grid size={2}>
                <ObjSelectRecord
                    get={select} set={setSelect}
                    items={TestEnum}
                    emptyItem='빈 값' emptyValue={null}
                    name='item4' label='item4'
                />
            </Grid>

            <Grid size={2}>
                <ObjSelectOne
                    emptyItem='미선택'
                    label='item5'
                    get={select} set={setSelect}
                    items={list} name='item5'
                />
            </Grid>
            <Grid size={2}>
                <ObjSelectOne
                    emptyItem='미선택'
                    label='item6'
                    get={select} set={setSelect}
                    items={list} name='item6'
                />
            </Grid>
        </Grid>
    );
};

export default ObjPage;