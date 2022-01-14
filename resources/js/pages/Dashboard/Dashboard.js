import React from "react";
import {Card, Table} from "react-bootstrap";
import {axios} from "../../helpers/axios";

export default (props) => {
    const [data, setData] = React.useState({});
    const [identities, setIdentities] = React.useState([]);
    const [purseTypes, setPurseTypes] = React.useState([]);
    const [purseList, setPurseList] = React.useState({});

    React.useEffect(()=> {
        init();
    }, []);

    async function init(){
        let res = await axios.get('/dashboard');
        let res2 = await axios.get('/report');
        setData(res);
        setIdentities(res2.identities);
        setPurseTypes(res2.wallet_types);
        setPurseList(res2.list);
    }

    return (
        <div className={'dashboard'}>
            <Card border={'none'}>
                <Card.Header className={'bg-white'}>出入帐概览</Card.Header>
                <Card.Body className={'p-0 overview'}>
                    <div className={'flex'}>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>今日转账条数</small>
                                <h5 className={'mt-4 mb-0'}>{data.today_transfer_count}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>今日用户出帐总金额</small>
                                <h5 className={'mt-4 mb-0'}>{Number(data.today_user_out_sum).toFixed(4)}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>今日用户入账总金额</small>
                                <h5 className={'mt-4 mb-0'}>{Number(data.today_user_into_sum).toFixed(4)}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-bottom'}>
                            <div className={'p-4'}>
                                <small>出入帐差异</small>
                                <h5 className={'mt-4 mb-0'}>{(Number(data.today_user_out_sum) + Number(data.today_user_into_sum)).toFixed(4)}</h5>
                            </div>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>昨日转账条数</small>
                                <h5 className={'mt-4 mb-0'}>{data.yesterday_transfer_count}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>昨日用户出帐总金额</small>
                                <h5 className={'mt-4 mb-0'}>{Number(data.yesterday_user_out_sum).toFixed(4)}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-right border-bottom'}>
                            <div className={'p-4'}>
                                <small>昨日用户入账总金额</small>
                                <h5 className={'mt-4 mb-0'}>{Number(data.yesterday_user_into_sum).toFixed(4)}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-bottom'}>
                            <div className={'p-4'}>
                                <small>出入帐差异</small>
                                <h5 className={'mt-4 mb-0'}>{(Number(data.yesterday_user_out_sum) + Number(data.yesterday_user_into_sum)).toFixed(4)}</h5>
                            </div>
                        </div>
                    </div>
                    <div className={'flex'}>
                        <div className={'w-25 border-right'}>
                            <div className={'p-4'}>
                                <small>转账总条数</small>
                                <h5 className={'mt-4 mb-0'}>{data.transfer_count}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-right'}>
                            <div className={'p-4'}>
                                <small>用户出帐总金额</small>
                                <h5 className={'mt-4 mb-0'}>{Number(data.user_out_sum).toFixed(4)}</h5>
                            </div>
                        </div>
                        <div className={'w-25 border-right'}>
                            <div className={'p-4'}>
                                <small>用户入账总金额</small>
                                <h5 className={'mt-4 mb-0'}>{Number(data.user_into_sum).toFixed(4)}</h5>
                            </div>
                        </div>
                        <div className={'w-25'}>
                            <div className={'p-4'}>
                                <small>出入帐差异</small>
                                <h5 className={'mt-4 mb-0'}>{(Number(data.user_out_sum) + Number(data.user_into_sum)).toFixed(4)}</h5>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <Card border={'none'} className={'mt-4'}>
                <Card.Header className={'bg-white'}>钱包余额概览</Card.Header>
                <Card.Body className={'p-0 overview'}>
                    <Table striped={false} bordered={false} hover={false}>
                        <thead>
                        <tr>
                            <th>所属模型</th>
                            {purseTypes.map(item => <th key={item.id}>
                                <div>{item.name}</div>
                            </th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {Object.values(purseList).map((item, index) => <tr key={Object.keys(purseList)[index]}>
                            <td>{Object.keys(purseList)[index]}</td>
                            {purseTypes.map(type => <td key={type.id}>
                                {item.find(item2 => item2.wallet_type_id === type.id) ? <div>
                                        <div className={'py-1'}>{(Number(item.find(item2 => item2.wallet_type_id === type.id).balance) + Number(item.find(item2 => item2.wallet_type_id === type.id).freeze)).toFixed(4)}</div>
                                        {/*<div className={'py-1'}>{Number(item2.balance).toFixed(4)}</div>*/}
                                        {/*<div className={'py-1'}>{Number(item2.freeze).toFixed(4)}</div>*/}
                                    </div>
                                    : <div>0.0000</div>}
                            </td>)}

                        </tr>)}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}
