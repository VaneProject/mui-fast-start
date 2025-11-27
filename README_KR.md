# Mui Fast Start

[English](./README.md)

해당 라이브러리는 [MUI](https://mui.com/)와 [React](https://ko.react.dev/)기반으로 구현된 라이브러리로 MIT라이센스를 따르고 있습니다.

빠르게 개발을 하기 위해서 개발된 라이브러리로 비슷하거나 반복적으로 사용되는 코드를 줄이기 위한 목적으로 만들어지게 되었습니다.

# Example
### 사용법
해당 라이브러이에서는 기본적으로 mui/react의 props를 확장해서 사용하고 있습니다.
mui-fast-start에서 지정된 props에서 원본 props를 그대로 사용하시면 됩니다.

예시로 mui의 TextField의 사용법이 아래와 같은 경우
```tsx
import TextField from '@mui/material/TextField';

<TextField 
    id="outlined-basic" 
    label="Outlined" 
    variant="outlined" 
/>
```
mui-fast-start에서 확장 props가 get, set라고 했을때 아래와 같이 기존의 props문법을 따르게 사용할 수 있습니다.
```tsx
import { SingleText } from "mui-fast-start";

<SingleText
    id="outlined-basic" 
    label="Outlined" 
    variant="outlined"
    get={text} set={setText}
/>
```



# Doc
## FastStartProvider
기본값으로 주입할 **props**를 정의하는 Provider입니다.
우선순위는 `기본값 > createDefaultProps > components props`순으로 따로 props를 지정하지 않으면 여기에서 지정한 props가 전체 적용됩니다.

해당 컴포넌트는 mui의 ThemeProvider가 내장되어 있는 컴포넌트이므로 한 번 더 사용하지 않도록 주의가 필요합니다.

예시
```tsx
import {createTheme, CssBaseline} from "@mui/material";
import { createDefaultProps } from 'mui-fast-start/styles';
import { FastStartProvider } from 'mui-fast-start';

const theme = createTheme();
const defaultProps = createDefaultProps({
    Single: {
        Integer: {
            variant: 'filled',
            size: 'medium',
            fullWidth: false,
            autoComplete: 'off',
            inputMode: 'numeric',
            type: 'text',
            step: 1,
            def: 0
        }
    },
    Obj: {
        Float: {
            variant: 'filled',
            size: 'medium',
            fullWidth: false,
            autoComplete: 'off',
            inputMode: 'decimal',
            type: 'text',
            step: 0.01,
            def: 0
        }
    }
});

<FastStartProvider
    defaultProps={defaultProps}
    theme={theme}
    defaultMode='dark'
>
    <CssBaseline/>
    <StrictMode>
        <App/>
    </StrictMode>
</FastStartProvider>
```

## Single
Single컴포넌트는 단일 useState에서 사용되는 컴포넌트입니다.

mui에서 본래 아래와 같이 value와 onChange의 함수를 만들어 사용했던 내용을 해당 라이브러리에서는 

**mui 사용예제**
```tsx
import React, { useState } from "react";
import TextField from '@mui/material/TextField';

const [text, setText] = useState<string>('');

const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
}

<TextField 
    fullWidth={true}
    autoComplete="off"
    size="small"
    variant="outlined" 
    label="텍스트"
    value={text}
    onChange={handleTextChange}
    slotProps={{
        htmlInput: {
            maxLength: 10,
        }
    }}
/>
```

**mui-fast-start 사용예제**
```tsx
import { SingleText } from "mui-fast-start";

const [text, setText] = useState<string>('');

<SingleText
    label='텍스트'
    maxLength={10}
    get={text} set={setText}
/>
```

## Obj
name이 필수값으로 사용되며 name 기준으로 값이 변경됩니다.

object타입을 받는 컴포넌트로 해당 object의 key값을 name으로 받는 컴포넌트입니다.


**mui 사용예제**
```tsx
import React, { useState } from "react";
import TextField from '@mui/material/TextField';

type TempType = {
    check1: boolean,
    check2: boolean,
    float: number,
    integer: number,
    tempText: string
}

const [temp, setTemp] = useState<TempType>({
    check1: false,
    check2: false,
    float: 0,
    integer: 0,
    tempText: ''
});

const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemp({...temp, tempText: e.target.value});
}

<TextField
    fullWidth={true}
    autoComplete="off"
    size="small"
    variant="outlined" 
    label='테스트'
    value={temp.tempText}
    onChange={handleTextChange}
/>
```

**mui-fast-start 사용예제**
```tsx
import React, { useState } from "react";
import { ObjText } from "mui-fast-start";

type TempType = {
    check1: boolean,
    check2: boolean,
    float: number,
    integer: number,
    tempText: string
}

const [temp, setTemp] = useState<TempType>({
    check1: false,
    check2: false,
    float: 0,
    integer: 0,
    tempText: ''
});

<ObjText<TempType>
    label='텍스트' 
    name='tempText'
    get={temp} 
    set={setTemp}
/>
```


# Props
### SingleFloat
확장 props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | number | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<number>> | (필수값) | useState의 2번째 값 |
| label | React.ReactNode | - | 라벨 내용 |
| errorData | string | - | 에러 메시지 |
| minLength | number | - | 입력할 수 있는 최소 길이 |
| maxLength | number | - | 입력할 수 있는 최대 길이 |
| startAdornment | React.ReactNode | - | 시작 InputAdornment 형식 |
| endAdornment | React.ReactNode | - | 종료 InputAdornment 형식 |
| def | number | 0 | 입력된 숫자형식이 잘못되거나 했을때 들어가는 기본으로 들어가지는 값 |
| min | number | - | 입력할 수 있는 최소값 |
| max | number | - | 입력할 수 있는 최대값 |
| step | number | 0.01 | 스탭으로 올렸을때 증가하는 크기 |

### SingleInteger
확장 props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | number | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<number>> | (필수값) | useState의 2번째 값 |
| label | React.ReactNode | - | 라벨 내용 |
| errorData | string | - | 에러 메시지 |
| minLength | number | - | 입력할 수 있는 최소 길이 |
| maxLength | number | - | 입력할 수 있는 최대 길이 |
| startAdornment | React.ReactNode | - | 시작 InputAdornment 형식 |
| endAdornment | React.ReactNode | - | 종료 InputAdornment 형식 |
| def | number | 0 | 입력된 숫자형식이 잘못되거나 했을때 들어가는 기본으로 들어가지는 값 |
| min | number | - | 입력할 수 있는 최소값 |
| max | number | - | 입력할 수 있는 최대값 |
| step | number | 1 | 스탭으로 올렸을때 증가하는 크기 |


### SingleText
확장 props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | string | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<string>> | (필수값) | useState의 2번째 값 |
| label | React.ReactNode | - | 라벨 내용 |
| errorData | string | - | 에러 메시지 |
| minLength | number | - | 입력할 수 있는 최소 길이 |
| maxLength | number | - | 입력할 수 있는 최대 길이 |
| startAdornment | React.ReactNode | - | 시작 InputAdornment 형식 |
| endAdornment | React.ReactNode | - | 종료 InputAdornment 형식 |

### SingleCheckbox
확장 props: [CheckboxProps](https://mui.com/material-ui/api/checkbox/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | boolean | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<boolean>> | (필수값) | useState의 2번째 값 |
| label | React.ReactNode | - | 라벨 내용 |

### SingleCheckIcon
확장 props: [IconButtonProps](https://mui.com/material-ui/api/icon-button/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | boolean | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<boolean>> | (필수값) | useState의 2번째 값 |
| on | React.ReactNode | (필수값) | true일때 표시되는 node |
| off | React.ReactNode | (필수값) | false일때 표시되는 node |


----


### ObjFloat
확장 props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | object | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<object>> | (필수값) | useState의 2번째 값 |
| name | string | (필수값) | object의 키 값 |
| label | React.ReactNode | - | 라벨 내용 |
| errorData | object | - | 에러 메시지 |
| minLength | number | - | 입력할 수 있는 최소 길이 |
| maxLength | number | - | 입력할 수 있는 최대 길이 |
| startAdornment | React.ReactNode | - | 시작 InputAdornment 형식 |
| endAdornment | React.ReactNode | - | 종료 InputAdornment 형식 |
| def | number | 0 | 입력된 숫자형식이 잘못되거나 했을때 들어가는 기본으로 들어가지는 값 |
| min | number | - | 입력할 수 있는 최소값 |
| max | number | - | 입력할 수 있는 최대값 |
| step | number | 0.01 | 스탭으로 올렸을때 증가하는 크기 |

### ObjInteger
확장 props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | object | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<object>> | (필수값) | useState의 2번째 값 |
| name | string | (필수값) | object의 키 값 |
| label | React.ReactNode | - | 라벨 내용 |
| errorData | object | - | 에러 메시지 |
| minLength | number | - | 입력할 수 있는 최소 길이 |
| maxLength | number | - | 입력할 수 있는 최대 길이 |
| startAdornment | React.ReactNode | - | 시작 InputAdornment 형식 |
| endAdornment | React.ReactNode | - | 종료 InputAdornment 형식 |
| def | number | 0 | 입력된 숫자형식이 잘못되거나 했을때 들어가는 기본으로 들어가지는 값 |
| min | number | - | 입력할 수 있는 최소값 |
| max | number | - | 입력할 수 있는 최대값 |
| step | number | 1 | 스탭으로 올렸을때 증가하는 크기 |

### ObjText
확장 props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | object | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<object>> | (필수값) | useState의 2번째 값 |
| name | string | (필수값) | object의 키 값 |
| label | React.ReactNode | - | 라벨 내용 |
| errorData | object | - | 에러 메시지 |
| minLength | number | - | 입력할 수 있는 최소 길이 |
| maxLength | number | - | 입력할 수 있는 최대 길이 |
| startAdornment | React.ReactNode | - | 시작 InputAdornment 형식 |
| endAdornment | React.ReactNode | - | 종료 InputAdornment 형식 |

### SingleCheckbox
확장 props: [CheckboxProps](https://mui.com/material-ui/api/checkbox/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | object | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<object>> | (필수값) | useState의 2번째 값 |
| name | string | (필수값) | object의 키 값 |
| label | React.ReactNode | - | 라벨 내용 |

### SingleCheckIcon
확장 props: [IconButtonProps](https://mui.com/material-ui/api/icon-button/)

| 이름 | 타입 | 기본값 | 설명 |
|:-:|:-:|:-:|:-:|
| get | object | (필수값) | useState의 1번째 값 |
| set | Dispatch<SetStateAction<object>> | (필수값) | useState의 2번째 값 |
| name | string | (필수값) | object의 키 값 |
| on | React.ReactNode | (필수값) | true일때 표시되는 node |
| off | React.ReactNode | (필수값) | false일때 표시되는 node |
