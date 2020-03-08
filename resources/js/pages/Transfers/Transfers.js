import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {axios} from "../../helpers/axios";
import Pagination from "../../components/Pagination";
import StatusTransfer from "../../components/StatusTransfer";
import {tips} from "../../helpers/functions";
import ButtonUntransfer from "../../components/ButtonUntransfer";
import ButtonTransferDelete from "../../components/ButtonTransferDelete";
import DateRangePicker from "../../components/DateRangePicker";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState({data: []});
    const [page, setPage] = React.useState(1);
    const [identities, setIdentities] = React.useState([]);
    const [purses, setPurses] = React.useState([]);
    const [user_id, setUser_id] = React.useState('');
    const [out_identity_type_id, setOut_dentity_type_id] = React.useState('');
    const [out_purse_type_id, setOut_purse_type_id] = React.useState('');
    const [into_identity_type_id, setInto_dentity_type_id] = React.useState('');
    const [into_purse_type_id, setInto_purse_type_id] = React.useState('');
    const [date, setDate] = React.useState([]);

    React.useEffect(() => {
        init();
        getFilters();
    }, [page]);

    async function init(reset) {
        let p = reset ? 1 : page;
        let res = await axios.get('/transfers', {params: {user_id, out_identity_type_id, out_purse_type_id, into_identity_type_id, into_purse_type_id, date, page: p}});
        setList(res);
    }

    async function getFilters(){
        let res2 = await axios.get('/transfers/filters');
        setIdentities(res2.identities);
        setPurses(res2.purses);
    }

    async function un_transfer(id){
        await axios.put('/transfers/un_transfer/'+id);
        tips('冲正完成', 'success');
        await init();
    }

    async function del(id){
        await axios.delete('/transfers/'+id);
        tips('删除成功', 'success');
        await init();
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init(true)}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>用户ID</Form.Label><Form.Control value={user_id} onChange={(e) => setUser_id(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>出帐身份类型</Form.Label><Form.Control as={'select'} onChange={e => setOut_dentity_type_id(e.target.value)}>
                            <option value={0}>-筛选-</option>
                            {identities.map(identity =>
                                <option key={identity.id} value={identity.id}>{identity.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>出帐钱包类型</Form.Label><Form.Control as={'select'} onChange={e => setOut_purse_type_id(e.target.value)}>
                            <option value={0}>-筛选-</option>
                            {purses.map(purse =>
                                <option key={purse.id} value={purse.id}>{purse.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>入账身份类型</Form.Label><Form.Control as={'select'} onChange={e => setInto_dentity_type_id(e.target.value)}>
                            <option value={0}>-筛选-</option>
                            {identities.map(identity =>
                                <option key={identity.id} value={identity.id}>{identity.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>入账钱包类型</Form.Label><Form.Control as={'select'} onChange={e => setInto_purse_type_id(e.target.value)}>
                            <option value={0}>-筛选-</option>
                            {purses.map(purse =>
                                <option key={purse.id} value={purse.id}>{purse.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <br />
                        <DateRangePicker onChange={setDate} />
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <div className={'overflow-scroll'}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Reason</th>
                    <th>出帐用户ID</th>
                    <th>出帐身份类型</th>
                    <th>出帐钱包类型</th>
                    <th>出帐钱包ID</th>
                    <th>出帐后余额</th>
                    <th>入帐用户ID</th>
                    <th>入帐身份类型</th>
                    <th>入帐钱包类型</th>
                    <th>入帐钱包ID</th>
                    <th>入帐后余额</th>
                    <th>交易金额</th>
                    <th>钱包状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {list.data.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.reason}</td>
                    <td className={'text-warning'}>{row.out_user_id}</td>
                    <td className={'text-warning'}>{row.out_identity_type.name}</td>
                    <td className={'text-warning'}>{row.out_purse_type.name}</td>
                    <td className={'text-warning'}>{row.out_purse_id}</td>
                    <td className={'text-warning'}>{Number(row.out_balance).toLocaleString()}</td>
                    <td className={'text-info'}>{row.into_user_id}</td>
                    <td className={'text-info'}>{row.into_identity_type.name}</td>
                    <td className={'text-info'}>{row.into_purse_type.name}</td>
                    <td className={'text-info'}>{row.into_purse_id}</td>
                    <td className={'text-info'}>{Number(row.into_balance).toLocaleString()}</td>
                    <td>{Number(row.amount).toLocaleString()}</td>
                    <td><StatusTransfer status={row.status}/></td>
                    <td>
                        <ButtonGroup size={"sm"}>
                            {row.status === 1 && <ButtonUntransfer onClick={()=> un_transfer(row.id)}>冲正</ButtonUntransfer>}
                            {row.status === 2 && <ButtonTransferDelete onClick={()=> del(row.id)}>删除</ButtonTransferDelete>}
                        </ButtonGroup>
                    </td>
                </tr>)}
                </tbody>
            </Table>
            <Pagination {...list} onChange={setPage} />
            </div>
        </div>
    );
}
