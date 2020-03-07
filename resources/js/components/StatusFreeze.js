import React from "react";

export default (props) => {

    return (
        <div>
            {props.status === 0 && <div className={'text-dark'}>无效</div>}
            {props.status === 1 && <div className={'text-dark'}>冻结中</div>}
            {props.status === 2 && <div className={'text-success'}>已解冻</div>}
        </div>
    );
}
