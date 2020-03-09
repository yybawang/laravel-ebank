import React from "react";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

export default (props) => {

    return (
        <OverlayTrigger placement={"left"} trigger={"focus"} overlay={
            <Popover id={'unfreeze'}>
                <Popover.Title>确认关闭</Popover.Title>
                <Popover.Content>
                    <div className={'py-1'}>更改钱包状态为无效，并关闭查询与转账功能</div>
                    <div className={'py-1'}><Button size={"sm"} variant={"danger"} onMouseDown={props.onClick}>确认</Button></div>
                </Popover.Content>
            </Popover>
        }>
            <Button size={"sm"} variant={"danger"}>{props.children}</Button>
        </OverlayTrigger>
    );
}
