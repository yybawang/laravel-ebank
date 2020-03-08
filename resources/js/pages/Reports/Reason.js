import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {axios} from "../../helpers/axios";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState([]);
    const [reason, setReason] = React.useState('');
    const [user_id, setUser_id] = React.useState('');

    React.useEffect(() => {
        init();
    }, []);

    async function init(reset) {
        let res = await axios.get('/reports/reason', {params: {reason, user_id}});
        setList(res);
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init()}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>Reason</Form.Label><Form.Control type={"number"} value={reason} onChange={(e) => setReason(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>用户ID</Form.Label><Form.Control type={"number"} value={user_id} onChange={(e) => setUser_id(e.target.value)}/></Form.Group>
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Reason</th>
                    <th>行为名称</th>
                    <th>出帐身份</th>
                    <th>出帐钱包</th>
                    <th>入帐身份</th>
                    <th>入帐钱包</th>
                    <th>总交易金额</th>
                </tr>
                </thead>
                <tbody>
                {list.map(row => <tr key={row.id}>
                    <td>{row.reason}</td>
                    <td>{row.name}</td>
                    <td className={'text-warning'}>{row.out_identity_type.name}</td>
                    <td className={'text-warning'}>{row.out_purse_type.name}</td>
                    <td className={'text-info'}>{row.into_identity_type.name}</td>
                    <td className={'text-info'}>{row.into_purse_type.name}</td>
                    <td>{Number(row.amount).toLocaleString()}</td>
                </tr>)}
                </tbody>
            </Table>
        </div>
    );
}
