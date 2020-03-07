import React from "react";
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

export default (props) => {

    return (
        <OverlayTrigger placement={"left"} trigger={"focus"} overlay={
            <Popover id={'delete'}>
                <Popover.Title>确认删除</Popover.Title>
                <Popover.Content>
                    <div className={'py-1'}>冲正后的流水已被当作无用数据，请明确确认对账时已不需要此数据</div>
                    <div className={'py-1'}><strong>数据可安全删除，如果操作失误可联系程序员处理恢复</strong></div>
                    <div className={'py-1'}><Button size={"sm"} variant={"danger"} onMouseDown={props.onClick}>删除</Button></div>
                </Popover.Content>
            </Popover>
        }>
            <Button size={"sm"} variant={"danger"}>{props.children}</Button>
        </OverlayTrigger>
    );
}
