import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import StatusNormal from "../../components/StatusNormal";
import {axios} from "../../helpers/axios";
import ButtonDelete from "../../components/ButtonDelete";
import {datetime, tips} from "../../helpers/functions";
import Pagination from "../../components/Pagination";
import StatusFreeze from "../../components/StatusFreeze";
import ButtonUnfreeze from "../../components/ButtonUnfreeze";
import DateRangePicker from "../../components/DateRangePicker";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState({data: []});
    const [page, setPage] = React.useState(1);
    const [id, setId] = React.useState('');
    const [identities, setIdentities] = React.useState([]);
    const [identity_id, setIdentity_id] = React.useState('');
    const [identity_type, setIdentity_type] = React.useState('');
    const [date, setDate] = React.useState('');

    React.useEffect(() => {
        init();
    }, [page]);

    async function init(reset) {
        let p = reset ? 1 : page;
        let res = await axios.get('/freezes', {params: {identity_id, id, identity_type, date, page: p}});
        setList(res.list);
        setIdentities(res.identities);
    }

    async function unfreeze(id){
        await axios.put('/freezes/unfreeze/'+id);
        tips('资金已解除冻结', 'success');
        await init();
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init(true)}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>冻结ID</Form.Label><Form.Control type={"number"} value={id} onChange={(e) => setId(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>身份ID</Form.Label><Form.Control type={"number"} value={identity_id} onChange={(e) => setIdentity_id(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>身份类型</Form.Label><Form.Control as={'select'} value={identity_type} onChange={e => setIdentity_type(e.target.value)}>
                            <option value={''} />
                            {identities.map(identity =>
                                <option key={identity.name} value={identity.name}>{identity.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <DateRangePicker onChange={setDate} />
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>身份ID</th>
                    <th>身份类型</th>
                    <th>钱包类型</th>
                    <th>冻结金额</th>
                    <th>冻结时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {list.data.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.identity_id}</td>
                    <td>{row.identity_type}</td>
                    <td>{row.wallet.wallet_type.name}</td>
                    <td><Link to={'/purses?id='+row.wallet_id}>{Number(row.amount).toFixed(4)}</Link></td>
                    <td><StatusFreeze status={row.status}/></td>
                    <td>{datetime(row.created_at)}</td>
                    <td>
                        <ButtonGroup size={"sm"}>
                            {row.status === 1 && <ButtonUnfreeze onClick={()=> unfreeze(row.id)}>解冻</ButtonUnfreeze>}
                        </ButtonGroup>
                    </td>
                </tr>)}
                </tbody>
            </Table>
            <Pagination {...list} onChange={setPage} />
        </div>
    );
}
