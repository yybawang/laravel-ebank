import React from "react";

export default (props) => {

    return (
        <div>
            {props.status === 0 && <div className={'text-warning'}>禁用</div>}
            {props.status === 1 && <div className={'text-success'}>启用</div>}
        </div>
    );
}
