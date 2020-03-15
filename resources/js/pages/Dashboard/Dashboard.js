import React from "react";
import {Card} from "react-bootstrap";
import {axios} from "../../helpers/axios";

export default (props) => {
    const [data, setData] = React.useState({});
    const [identities, setIdentities] = React.useState([]);
    const [purseTypes, setPurseTypes] = React.useState([]);
    const [purseList, setPurseList] = React.useState([]);

    React.useEffect(()=> {
        init();
    }, []);

    async function init(){
        let res = await axios.get('/dashboard');
        let res2 = await axios.get('/report');
        setData(res);
        setIdentities(res2.identities);
        setPurseTypes(res2.purse_types);
        setPurseList(res2.list);
    }

    return (
        <div className={'dashboard'}>
            <Card border={'none'}>
                <Card.Header className={'bg-white'}>出入帐预览</Card.Header>
                <Card.Body className={'p-0 overview'}>
                    <div className={'flex'}>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>今日新增用户</small>
                                <h4 className={'mt-4 mb-0'}>{data.today_user_count}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>今日转账总条数</small>
                                <h4 className={'mt-4 mb-0'}>{data.today_transfer_count}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>今日用户出帐总金额</small>
                                <h4 className={'mt-4 mb-0'}>{Number(data.today_user_out_sum).toLocaleString()}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-bottom'}>
                            <div className={'p-4'}>
                                <small>今日用户入账总金额</small>
                                <h4 className={'mt-4 mb-0'}>{Number(data.today_user_into_sum).toLocaleString()}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>昨日新增用户</small>
                                <h4 className={'mt-4 mb-0'}>{data.yesterday_user_count}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>昨日转账总条数</small>
                                <h4 className={'mt-4 mb-0'}>{data.yesterday_transfer_count}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>昨日用户出帐总金额</small>
                                <h4 className={'mt-4 mb-0'}>{Number(data.yesterday_user_out_sum).toLocaleString()}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-bottom'}>
                            <div className={'p-4'}>
                                <small>昨日用户入账总金额</small>
                                <h4 className={'mt-4 mb-0'}>{Number(data.yesterday_user_into_sum).toLocaleString()}</h4>
                            </div>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-25 border-right'}>
                            <div className={'p-4'}>
                                <small>总新增用户</small>
                                <h4 className={'mt-4 mb-0'}>{data.user_count}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-right'}>
                            <div className={'p-4'}>
                                <small>转账总条数</small>
                                <h4 className={'mt-4 mb-0'}>{data.transfer_count}</h4>
                            </div>
                        </div>
                        <div className={'w-25 border-right'}>
                            <div className={'p-4'}>
                                <small>用户出帐总金额</small>
                                <h4 className={'mt-4 mb-0'}>{Number(data.user_out_sum).toLocaleString()}</h4>
                            </div>
                        </div>
                        <div className={'w-25'}>
                            <div className={'p-4'}>
                                <small>用户入账总金额</small>
                                <h4 className={'mt-4 mb-0'}>{Number(data.user_into_sum).toLocaleString()}</h4>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card border={'none'} className={'mt-4'}>
                <Card.Header className={'bg-white'}>钱包余额预览</Card.Header>
                <Card.Body className={'p-0 overview'}>
                    <div className={'flex'}>
                        <div className={'flex-1 pl-2 text-center'}>
                            <div className={'py-3'} />
                        </div>
                        {identities.map(identity =>
                            <div key={identity.id} className={'flex-1 px-2 text-center border-left'}>
                                <div className={'py-3'}>{identity.name}</div>
                            </div>
                        )}
                        <div className={'flex-1 px-2 text-center border-left'}>
                            <div className={'py-3'}>用户持有余额</div>
                        </div>
                    </div>
                    {purseTypes.map(purseType =>
                        <div key={purseType.id}>
                            <div className={'flex'}>
                                <div className={'flex-1 pl-2 border-top'}>
                                    <div className={'pt-3'}>{purseType.name}</div>
                                </div>
                                {identities.map(identity =>
                                    <div key={identity.id} className={'flex-1 px-2 text-right border-top border-left'}>
                                        <div className={'pt-3'}>{purseList.length > 0 && Number(purseList.find(list => list.user_id === 0 && list.identity_type_id === identity.id && list.purse_type_id === purseType.id).balance).toLocaleString()}</div>
                                    </div>
                                )}
                                <div className={'flex-1 px-2 text-right border-top border-left'}>
                                    <div className={'pt-3'}>{purseList.length > 0 && Number(purseList.find(list => list.user_id > 0 && list.purse_type_id === purseType.id).balance).toLocaleString()}</div>
                                </div>
                            </div>
                            <div className={'flex'}>
                                <div className={'flex-1 pl-2'}>
                                    <div className={'pb-3'}>冻结中</div>
                                </div>
                                {identities.map(identity =>
                                    <div key={identity.id} className={'flex-1 px-2 text-right border-left'}>
                                        <div className={'pb-3'}>{purseList.length > 0 && Number(purseList.find(list => list.user_id === 0 && list.identity_type_id === identity.id && list.purse_type_id === purseType.id).freeze).toLocaleString()}</div>
                                    </div>
                                )}
                                <div className={'flex-1 px-2 text-right border-left'}>
                                    <div className={'pb-3'}>{purseList.length > 0 && Number(purseList.find(list => list.user_id > 0 && list.purse_type_id === purseType.id).freeze).toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    )}

                </Card.Body>
            </Card>
        </div>
    );
}
