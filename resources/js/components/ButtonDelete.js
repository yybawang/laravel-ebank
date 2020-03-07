import React from "react";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

export default (props) => {

    return (
        <OverlayTrigger placement={"left"} trigger={"focus"} overlay={
            <Popover id={'delete'}>
                <Popover.Title>确认删除</Popover.Title>
                <Popover.Content>
                    <div className={'py-1'}>请确认后点击确认，此操作不可恢复</div>
                    <div className={'py-1'}><Button size={"sm"} variant={"danger"} onMouseDown={props.onClick}>确认</Button></div>
                </Popover.Content>
            </Popover>
        }>
            <Button size={"sm"} variant={"danger"}>{props.children}</Button>
        </OverlayTrigger>
    );
}
