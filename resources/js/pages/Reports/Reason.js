import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {axios} from "../../helpers/axios";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState([]);
    const [code, setCode] = React.useState('');

    React.useEffect(() => {
        init();
    }, []);

    async function init(reset) {
        let res = await axios.get('/reports/reason', {params: {code}});
        setList(res);
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init()}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>Reason 代码</Form.Label><Form.Control type={"number"} value={code} onChange={(e) => setCode(e.target.value)}/></Form.Group>
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Reason</th>
                    <th>行为名称</th>
                    <th>交易身份</th>
                    <th>钱包类型</th>
                    <th>交易总量</th>
                </tr>
                </thead>
                <tbody>
                {list.map(row => <tr key={row.reason_id}>
                    <td className={'text-info'}>{row.reason.code}</td>
                    <td>{row.reason.name}</td>
                    <td>{row.reason.identity}</td>
                    <td>{row.reason.wallet_type.name}</td>
                    <td>{Number(row.amount).toFixed(4)}</td>
                </tr>)}
                </tbody>
            </Table>
        </div>
    );
}
