import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import {axios} from "../../helpers/axios";
import Pagination from "../../components/Pagination";
import StatusTransfer from "../../components/StatusTransfer";
import {datetime, tips} from "../../helpers/functions";
import ButtonUntransfer from "../../components/ButtonUntransfer";
import ButtonTransferDelete from "../../components/ButtonTransferDelete";
import DateRangePicker from "../../components/DateRangePicker";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState({data: []});
    const [page, setPage] = React.useState(1);
    const [identities, setIdentities] = React.useState([]);
    const [purses, setPurses] = React.useState([]);
    const [id, setId] = React.useState('');
    const [identity_id, setIdentity_id] = React.useState('');
    const [identity_type, setIdentity_type] = React.useState('');
    const [wallet_type_id, setWallet_type_id] = React.useState('');
    const [date, setDate] = React.useState([]);

    React.useEffect(() => {
        init();
        getFilters();
    }, [page]);

    async function init(reset) {
        let p = reset ? 1 : page;
        let res = await axios.get('/transfers', {params: {id, identity_id, identity_type, wallet_type_id, date, page: p}});
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
                        <Form.Group><Form.Label>转账ID</Form.Label><Form.Control value={id} onChange={(e) => setId(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>身份ID</Form.Label><Form.Control value={identity_id} onChange={(e) => setIdentity_id(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>身份类型</Form.Label><Form.Control as={'select'} value={identity_type} onChange={e => setIdentity_type(e.target.value)}>
                            <option value={''} />
                            {identities.map(identity =>
                                <option key={identity.name} value={identity.name}>{identity.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>钱包类型</Form.Label><Form.Control as={'select'} value={wallet_type_id} onChange={e => setWallet_type_id(e.target.value)}>
                            <option value={''} />
                            {purses.map(purse =>
                                <option key={purse.id} value={purse.id}>{purse.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <DateRangePicker onChange={setDate} />
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <div className={'overflow-auto'}>
            <Table striped bordered hover responsive={"xl"}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Reason</th>
                    <th>交易钱包</th>
                    <th>身份类型</th>
                    <th>交易金额</th>
                    <th>交易后余额</th>
                    <th>交易时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {list.data.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.reason.code}</td>
                    <td><Link to={'/purses?id='+row.wallet_id} className={'text-info'}>{row.wallet.wallet_type.name}</Link></td>
                    <td>{row.identity_type}</td>
                    <td className={'text-danger'}>{Number(row.amount).toFixed(4)}</td>
                    <td>{Number(row.balance).toFixed(4)}</td>
                    <td>{datetime(row.created_at)}</td>
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
