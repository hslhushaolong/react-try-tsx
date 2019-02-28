import React from "react";
import { Button, Select } from 'antd';

const Option = Select.Option;
export interface AvatarProps {
    value: string;
    children?: React.ReactNode;
    onChange?: (value: string) => void;
}
export default class SalarySelect extends React.Component<AvatarProps> {
    onChangeSelect = (e: string) => {
        const { onChange } = this.props;
        if(onChange) {
            onChange(e);
        }
    }

    render() {
        const { value } = this.props;
        return (
               <div>
                <Select value={value} style={{ width: '100px' }} onChange={this.onChangeSelect}>
                    <Option value='aaa'>aaa</Option>
                    <Option value='bbb'>bbb</Option>
                    <Option value='ccc'>ccc</Option>
                    <Option value='ddd'>ddd</Option>
                </Select>
                {this.props.children}
               </div>
        )
    }
}
