import { Grid } from "@mui/material";
import { useState } from "react";
import {
    SingleCheckIcon
} from "../../../src/components";
import './App.css';
import ObjPage from "./pages/ObjPage";
import SinglePage from "./pages/SinglePage";



function App() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Grid container>
            <Grid size={12}>
                <SingleCheckIcon
                    on={"single"} off={"obj"}
                    get={checked} set={setChecked}
                />
            </Grid>
            {checked ? <SinglePage /> : <ObjPage />}
        </Grid>
    )
}

export default App
