# Mui Fast Start

[한국어 (Korean)](./README_KR.md)

This library is built on [MUI](https://mui.com/) and [React](https://react.dev/), and is licensed under the MIT License.

It was developed for rapid development, aiming to reduce repetitive or similar code patterns.

# Example
### Usage
This library extends the props of MUI/React components.
You can use the original props along with the additional props defined by mui-fast-start.

For example, if MUI's TextField is used like this:
```tsx
import TextField from '@mui/material/TextField';

<TextField 
    id="outlined-basic" 
    label="Outlined" 
    variant="outlined" 
/>
```
With mui-fast-start's extended props (`get`, `set`), you can use it as follows while maintaining the original props syntax:
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
A Provider that defines default **props** to inject.
Priority order is `default values > createDefaultProps > component props`. If no props are specified, the props defined here will be applied globally.

This component has MUI's ThemeProvider built-in, so be careful not to use ThemeProvider again.

Example:
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
Single components are used with a single useState.

In MUI, you would originally create value and onChange functions like this:

**MUI Example**
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
    label="Text"
    value={text}
    onChange={handleTextChange}
    slotProps={{
        htmlInput: {
            maxLength: 10,
        }
    }}
/>
```

**mui-fast-start Example**
```tsx
import { SingleText } from "mui-fast-start";

const [text, setText] = useState<string>('');

<SingleText
    label='Text'
    maxLength={10}
    get={text} set={setText}
/>
```

## Obj
The `name` prop is required and values are changed based on the name.

Components that receive an object type, where the object's key is specified as the name prop.


**MUI Example**
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
    label='Test'
    value={temp.tempText}
    onChange={handleTextChange}
/>
```

**mui-fast-start Example**
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
    label='Text' 
    name='tempText'
    get={temp} 
    set={setTemp}
/>
```


# Props
### SingleFloat
Extended props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | number | (required) | First value of useState |
| set | Dispatch<SetStateAction<number>> | (required) | Second value of useState |
| label | React.ReactNode | - | Label content |
| errorData | string | - | Error message |
| minLength | number | - | Minimum input length |
| maxLength | number | - | Maximum input length |
| startAdornment | React.ReactNode | - | Start InputAdornment |
| endAdornment | React.ReactNode | - | End InputAdornment |
| def | number | 0 | Default value when input format is invalid |
| min | number | - | Minimum value |
| max | number | - | Maximum value |
| step | number | 0.01 | Step increment size |

### SingleInteger
Extended props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | number | (required) | First value of useState |
| set | Dispatch<SetStateAction<number>> | (required) | Second value of useState |
| label | React.ReactNode | - | Label content |
| errorData | string | - | Error message |
| minLength | number | - | Minimum input length |
| maxLength | number | - | Maximum input length |
| startAdornment | React.ReactNode | - | Start InputAdornment |
| endAdornment | React.ReactNode | - | End InputAdornment |
| def | number | 0 | Default value when input format is invalid |
| min | number | - | Minimum value |
| max | number | - | Maximum value |
| step | number | 1 | Step increment size |


### SingleText
Extended props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | string | (required) | First value of useState |
| set | Dispatch<SetStateAction<string>> | (required) | Second value of useState |
| label | React.ReactNode | - | Label content |
| errorData | string | - | Error message |
| minLength | number | - | Minimum input length |
| maxLength | number | - | Maximum input length |
| startAdornment | React.ReactNode | - | Start InputAdornment |
| endAdornment | React.ReactNode | - | End InputAdornment |

### SingleCheckbox
Extended props: [CheckboxProps](https://mui.com/material-ui/api/checkbox/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | boolean | (required) | First value of useState |
| set | Dispatch<SetStateAction<boolean>> | (required) | Second value of useState |
| label | React.ReactNode | - | Label content |

### SingleCheckIcon
Extended props: [IconButtonProps](https://mui.com/material-ui/api/icon-button/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | boolean | (required) | First value of useState |
| set | Dispatch<SetStateAction<boolean>> | (required) | Second value of useState |
| on | React.ReactNode | (required) | Node displayed when true |
| off | React.ReactNode | (required) | Node displayed when false |


----


### ObjFloat
Extended props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | object | (required) | First value of useState |
| set | Dispatch<SetStateAction<object>> | (required) | Second value of useState |
| name | string | (required) | Object key name |
| label | React.ReactNode | - | Label content |
| errorData | object | - | Error message |
| minLength | number | - | Minimum input length |
| maxLength | number | - | Maximum input length |
| startAdornment | React.ReactNode | - | Start InputAdornment |
| endAdornment | React.ReactNode | - | End InputAdornment |
| def | number | 0 | Default value when input format is invalid |
| min | number | - | Minimum value |
| max | number | - | Maximum value |
| step | number | 0.01 | Step increment size |

### ObjInteger
Extended props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | object | (required) | First value of useState |
| set | Dispatch<SetStateAction<object>> | (required) | Second value of useState |
| name | string | (required) | Object key name |
| label | React.ReactNode | - | Label content |
| errorData | object | - | Error message |
| minLength | number | - | Minimum input length |
| maxLength | number | - | Maximum input length |
| startAdornment | React.ReactNode | - | Start InputAdornment |
| endAdornment | React.ReactNode | - | End InputAdornment |
| def | number | 0 | Default value when input format is invalid |
| min | number | - | Minimum value |
| max | number | - | Maximum value |
| step | number | 1 | Step increment size |

### ObjText
Extended props: [TextFieldProps](https://mui.com/material-ui/api/text-field/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | object | (required) | First value of useState |
| set | Dispatch<SetStateAction<object>> | (required) | Second value of useState |
| name | string | (required) | Object key name |
| label | React.ReactNode | - | Label content |
| errorData | object | - | Error message |
| minLength | number | - | Minimum input length |
| maxLength | number | - | Maximum input length |
| startAdornment | React.ReactNode | - | Start InputAdornment |
| endAdornment | React.ReactNode | - | End InputAdornment |

### ObjCheckbox
Extended props: [CheckboxProps](https://mui.com/material-ui/api/checkbox/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | object | (required) | First value of useState |
| set | Dispatch<SetStateAction<object>> | (required) | Second value of useState |
| name | string | (required) | Object key name |
| label | React.ReactNode | - | Label content |

### ObjCheckIcon
Extended props: [IconButtonProps](https://mui.com/material-ui/api/icon-button/)

| Name | Type | Default | Description |
|:-:|:-:|:-:|:-:|
| get | object | (required) | First value of useState |
| set | Dispatch<SetStateAction<object>> | (required) | Second value of useState |
| name | string | (required) | Object key name |
| on | React.ReactNode | (required) | Node displayed when true |
| off | React.ReactNode | (required) | Node displayed when false |

