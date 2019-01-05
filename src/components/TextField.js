import React from "react";
import {Input, Item, Label} from "native-base";


const TextField = (props) => (
    <Item floatingLabel>
        <Label>{props.label}</Label>
        <Input {...props} />
    </Item>
);

export default TextField;