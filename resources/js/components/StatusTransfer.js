import React from "react";

export default (props) => {

    return (
        <div>
            {props.status === 0 && <div className={'text-warning'}>无效</div>}
            {props.status === 1 && <div className={'text-success'}>有效</div>}
            {props.status === 2 && <div className={'text-muted'}>已冲正</div>}
        </div>
    );
}
