import React from "react";
import type {BaseObjectProps} from "../../types/types.ts";

abstract class ObjBase<TYPE extends object, PROPS, STATE>
    extends React.Component<BaseObjectProps<TYPE> & PROPS, STATE> {


}

export default ObjBase;