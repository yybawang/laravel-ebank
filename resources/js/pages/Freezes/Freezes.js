import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import StatusNormal from "../../components/StatusNormal";
import {axios} from "../../helpers/axios";
import ButtonDelete from "../../components/ButtonDelete";
import {tips} from "../../helpers/functions";
import Pagination from "../../components/Pagination";
import StatusFreeze from "../../components/StatusFreeze";
import ButtonUnfreeze from "../../components/ButtonUnfreeze";
import DateRangePicker from "../../components/DateRangePicker";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState({data: []});
    const [page, setPage] = React.useState(1);
    const [id, setId] = React.useState('');
    const [user_id, setUser_id] = React.useState('');
    const [date, setDate] = React.useState('');

    React.useEffect(() => {
        init();
    }, [page]);

    async function init(reset) {
        let p = reset ? 1 : page;
        let res = await axios.get('/freezes', {params: {user_id, id, date, page: p}});
        setList(res);
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
                        <Form.Group><Form.Label>用户ID</Form.Label><Form.Control type={"number"} value={user_id} onChange={(e) => setUser_id(e.target.value)}/></Form.Group>
                        <DateRangePicker onChange={setDate} />
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>用户ID</th>
                    <th>身份类型</th>
                    <th>钱包类型</th>
                    <th>钱包ID</th>
                    <th>冻结金额</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {list.data.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.purse.user_id}</td>
                    <td>{row.purse.identity_type.name}</td>
                    <td>{row.purse.purse_type.name}</td>
                    <td><Link to={'/purses?id='+row.purse_id}>{row.purse_id}</Link></td>
                    <td>{Number(row.amount).toLocaleString()}</td>
                    <td><StatusFreeze status={row.status}/></td>
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
