import React from "react";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

export default (props) => {

    return (
        <OverlayTrigger placement={"left"} trigger={"focus"} overlay={
            <Popover id={'unfreeze'}>
                <Popover.Title>确认冲正</Popover.Title>
                <Popover.Content>
                    <div className={'py-1'}>冲正即等于撤销转账操作，金额将按原路返还</div>
                    <div className={'py-1'}><strong>冲正后的流水将按照无用数据处理</strong></div>
                    <div className={'py-1'}><Button size={"sm"} variant={"primary"} onMouseDown={props.onClick}>确认</Button></div>
                </Popover.Content>
            </Popover>
        }>
            <Button size={"sm"} variant={"primary"}>{props.children}</Button>
        </OverlayTrigger>
    );
}
