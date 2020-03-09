import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import Transfer from "../../../images/Transfer";
import Reasons from "../../../images/Reasons";
import Dashboard from "../../../images/Dashboard";
import Freezes from "../../../images/Freezes";
import Balances from "../../../images/Balances";
import Identities from "../../../images/Identities";
import Purses from "../../../images/Purses";
import ReportsReason from "../../../images/ReportsReason";
import Behaviors from "../../../images/Behaviors";
import ReportsPurse from "../../../images/ReportsPurse";

export default (props) => {
    return (
        <ul className={'nav flex flex-col'}>
            <li className={'mt-3'}><NavLink exact={true} to={'/'} className={'flex items-center'} activeClassName={'active'}><Dashboard /><span>仪表盘</span></NavLink></li>
            <li><NavLink to={'/transfers'} className={'flex items-center'} activeClassName={'active'}><Transfer /><span>流水记录</span></NavLink></li>
            <li><NavLink to={'/reasons'} className={'flex items-center'} activeClassName={'active'}><Reasons /><span>转账Reason</span></NavLink></li>
            <li><NavLink to={'/freezes'} className={'flex items-center'} activeClassName={'active'}><Freezes /><span>冻结记录</span></NavLink></li>
            <li><NavLink to={'/purses'} className={'flex items-center'} activeClassName={'active'}><Balances /><span>钱包余额</span></NavLink></li>
            <li className={'mt-3'}><NavLink to={'/identities'} className={'flex items-center'} activeClassName={'active'}><Identities /><span>身份类型</span></NavLink></li>
            <li><NavLink to={'/purse_types'} className={'flex items-center'} activeClassName={'active'}><Purses /><span>钱包类型</span></NavLink></li>
            <li className={'mt-3'}><NavLink to={'/reports/reason'} className={'flex items-center'} activeClassName={'active'}><ReportsReason /><span>行为统计</span></NavLink></li>
            <li><NavLink to={'/reports/transfer'} className={'flex items-center'} activeClassName={'active'}><ReportsPurse /><span>转账统计</span></NavLink></li>
            <li><NavLink to={'/behaviors'} className={'flex items-center'} activeClassName={'active'}><Behaviors /><span>调用记录</span></NavLink></li>
        </ul>
    );
}
