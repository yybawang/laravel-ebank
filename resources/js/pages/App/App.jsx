import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import Menu from "./Menu";
import Identities from "../Identities/Identities";
import IdentitiesEdit from "../Identities/IdentitiesEdit";
import PurseTypes from "../PurseTypes/PurseTypes";
import PurseTypesEdit from "../PurseTypes/PurseTypesEdit";
import Reasons from "../Reasons/Reasons";
import ReasonsEdit from "../Reasons/ReasonsEdit";
import Freezes from "../Freezes/Freezes";
import Purses from "../Purses/Purses";
import Transfers from "../Transfers/Transfers";
import Behaviors from "../Behaviors/Behaviors";
import Dashboard from "../Dashboard/Dashboard";
import Reason from "../Reports/Reason";
import Transfer from "../Reports/Transfer";

export default (props) => {

    return (
        <Router>
            <div className={'flex flex-col layout'}>
                <div className={'layout-header'}>
                    <div className={'flex justify-between navbar'}>
                        <div className={'appname'}><h4><strong>Laravel</strong> EBank - {$SITE_NAME}</h4></div>
                        <div className={'action'}>refresh</div>
                    </div>
                </div>
                <div className={'flex-grow layout-body'}>
                    <div className={'h-100 flex'}>
                        <div className={'layout-menu'}><Menu/></div>
                        <div className={'flex-1 layout-content'}>
                            <Switch>
                                <Route exact={true} strict={true} path={'/'}><Dashboard /></Route>
                                <Route exact={true} path={'/transfers'}><Transfers /></Route>
                                <Route exact={true} path={'/freezes'}><Freezes /></Route>
                                <Route exact={true} path={'/purses'}><Purses /></Route>
                                <Route exact={true} path={'/identities'}><Identities /></Route>
                                <Route path={'/identities/edit/:id'}><IdentitiesEdit /></Route>
                                <Route exact={true} path={'/purse_types'}><PurseTypes /></Route>
                                <Route path={'/purse_types/edit/:id'}><PurseTypesEdit /></Route>
                                <Route exact={true} path={'/reasons'}><Reasons /></Route>
                                <Route path={'/reasons/edit/:id'}><ReasonsEdit /></Route>
                                <Route exact={true} path={'/reports/reason'}><Reason /></Route>
                                <Route exact={true} path={'/reports/transfer'}><Transfer /></Route>
                                <Route exact={true} path={'/behaviors'}><Behaviors /></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}
