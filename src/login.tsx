import * as React from "react";
import { Button, Select, message } from 'antd';
import SalarySelect from './component/SalarySelect';

const Option = Select.Option;
export interface AvatarProps {
    shape?: 'circle' | 'square';
    size?: 'large' | 'small' | 'default' | number;
}
export interface AvatarState {
    scale: number;
    isImgExist: boolean;
    value: string;
}
export default class Login extends React.Component<AvatarProps, AvatarState> {
    static defaultProps = {
        shape: "square",
        size: "small" || "default" || "large" || undefined,
    };
    constructor(props: Readonly<AvatarProps>){
        super(props)
        this.state = {
            scale: 1,
            isImgExist: true,
            value: 'aaa',
        };
    }

    onClickButton = () => {
        let { isImgExist } = this.state;
        this.setState({
            isImgExist: !isImgExist,
        })
        return message.error("错误");
    }

    onChangeSelect = (e: string):void => {
        this.setState({
            value: e,
        })
    }

    render() {
        const { isImgExist, value } = this.state;
        return (
            <div>
                {isImgExist ? '显示' : '隐藏'}
                <Button onClick={this.onClickButton}>按钮</Button>
                <SalarySelect
                  value={value}
                  onChange={this.onChangeSelect}
                ><div>children</div><p>sds</p></SalarySelect>
            </div>
        )
    }
}
