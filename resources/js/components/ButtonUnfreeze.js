import React from "react";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

export default (props) => {

    return (
        <OverlayTrigger placement={"left"} trigger={"focus"} overlay={
            <Popover id={'unfreeze'}>
                <Popover.Title>确认解冻</Popover.Title>
                <Popover.Content>
                    <div className={'py-1'}>解冻后将还原用户的余额，请确认后点击确认</div>
                    <div className={'py-1'}><strong className={'text-warning'}>你应该调用 EBank 门面(Facade) 来解冻，此处仅当作预留的特殊处理</strong></div>
                    <div className={'py-1'}><Button size={"sm"} variant={"primary"} onMouseDown={props.onClick}>确认解冻</Button></div>
                </Popover.Content>
            </Popover>
        }>
            <Button size={"sm"} variant={"primary"}>{props.children}</Button>
        </OverlayTrigger>
    );
}
