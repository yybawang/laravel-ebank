import React from "react";
import {Card} from "react-bootstrap";
import {axios} from "../../helpers/axios";

export default (props) => {
    const [data, setData] = React.useState({});

    React.useEffect(()=> {
        init();
    }, []);

    async function init(){
        let res = await axios.get('/dashboard');
        setData(res);
    }

    return (
        <div className={'dashboard'}>
            <Card border={'none'}>
                <Card.Header className={'bg-white'}>预览</Card.Header>
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
        </div>
    );
}
