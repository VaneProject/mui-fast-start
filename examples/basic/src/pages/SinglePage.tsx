import {useState} from "react";
import {Button, Divider, Grid, InputAdornment} from "@mui/material";
import {SingleCheckbox, SingleCheckIcon, SingleFloat, SingleInteger, SingleText} from "mui-fast-start";
import {SingleSelectOne, SingleSelectRecord} from "mui-fast-start";

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


const SinglePage = () => {
    const [float, setFloat] = useState<number>(0);
    const [integer, setInteger] = useState<number>(0);
    const [text, setText] = useState<string>('');
    const [checked, setChecked] = useState<boolean>(false);
    const [selectOne, setSelectOne] = useState<string | undefined>();
    const [recordSelect, setRecordSelect] = useState<keyof typeof TestRecord | undefined>();
    const [recordSelect1, setRecordSelect1] = useState<keyof typeof TestRecord>('test');
    const [enumSelect, setEnumSelect] = useState<keyof typeof TestEnum | undefined>();
    const [enumSelect1, setEnumSelect1] = useState<keyof typeof TestEnum>('test');


    return (
        <Grid container>
            <Button onClick={() => {
                setInteger(null);
                setFloat(null);
            }}>
                테스트
            </Button>

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
                    label='실수형' def={null}
                    min={-100} max={100}
                    get={float} set={setFloat}
                />
            </Grid>

            <Grid size={2}>{integer}</Grid>
            <Grid size={2}>
                <SingleInteger
                    label='정수형' def={null}
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

            <Grid size={12}>
                <Divider/>
            </Grid>

            <Grid size={2}>{selectOne?.toString()}</Grid>
            <Grid size={2}>
                <SingleSelectOne
                    variant='outlined' items={list}
                    get={selectOne} set={setSelectOne}
                />
            </Grid>

            <Grid size={2}>{recordSelect?.toString()}</Grid>
            <Grid size={2}>
                <SingleSelectRecord
                    variant='outlined' items={TestRecord}
                    get={recordSelect} set={setRecordSelect}
                />
            </Grid>

            <Grid size={2}>{recordSelect1?.toString()}</Grid>
            <Grid size={2}>
                <SingleSelectRecord
                    emptyItem={'빈 값 입니다.'}
                    variant='outlined' items={TestRecord}
                    get={recordSelect1} set={setRecordSelect1}
                />
            </Grid>

            <Grid size={2}>{enumSelect?.toString()}</Grid>
            <Grid size={2}>
                <SingleSelectRecord
                    variant='outlined' items={TestEnum}
                    get={enumSelect} set={setEnumSelect}
                />
            </Grid>

            <Grid size={2}>{enumSelect1?.toString()}</Grid>
            <Grid size={2}>
                <SingleSelectRecord
                    fullWidth
                    variant='outlined' items={TestEnum}
                    get={enumSelect1} set={setEnumSelect1}
                />
            </Grid>
        </Grid>
    );
};

export default SinglePage;
