import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {axios} from "../../helpers/axios";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState([]);
    const [identities, setIdentities] = React.useState([]);
    const [purses, setPurses] = React.useState([]);
    const [user_id, setUser_id] = React.useState('');
    const [out_identity_type_id, setOut_dentity_type_id] = React.useState('');
    const [out_purse_type_id, setOut_purse_type_id] = React.useState('');
    const [into_identity_type_id, setInto_dentity_type_id] = React.useState('');
    const [into_purse_type_id, setInto_purse_type_id] = React.useState('');

    React.useEffect(() => {
        init();
        getFilters();
    }, []);

    async function init() {
        let res = await axios.get('/reports/transfer', {params: {user_id, out_identity_type_id, out_purse_type_id, into_identity_type_id, into_purse_type_id}});
        setList(res);
    }

    async function getFilters(){
        let res2 = await axios.get('/transfers/filters');
        setIdentities(res2.identities);
        setPurses(res2.purses);
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init()}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>用户ID</Form.Label><Form.Control type={"number"} value={user_id} onChange={(e) => setUser_id(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>出帐身份类型</Form.Label><Form.Control as={'select'} onChange={e => setOut_dentity_type_id(e.target.value)}>
                            <option value={''} />
                            {identities.map(identity =>
                                <option key={identity.id} value={identity.id}>{identity.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>出帐钱包类型</Form.Label><Form.Control as={'select'} onChange={e => setOut_purse_type_id(e.target.value)}>
                            <option value={''} />
                            {purses.map(purse =>
                                <option key={purse.id} value={purse.id}>{purse.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>入账身份类型</Form.Label><Form.Control as={'select'} onChange={e => setInto_dentity_type_id(e.target.value)}>
                            <option value={''} />
                            {identities.map(identity =>
                                <option key={identity.id} value={identity.id}>{identity.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>入账钱包类型</Form.Label><Form.Control as={'select'} onChange={e => setInto_purse_type_id(e.target.value)}>
                            <option value={''} />
                            {purses.map(purse =>
                                <option key={purse.id} value={purse.id}>{purse.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <div className={'overflow-scroll'}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>出帐用户ID</th>
                    <th>出帐身份类型</th>
                    <th>出帐钱包类型</th>
                    <th>入帐用户ID</th>
                    <th>入帐身份类型</th>
                    <th>入帐钱包类型</th>
                    <th>交易总金额</th>
                </tr>
                </thead>
                <tbody>
                {list.map(row => <tr key={row.id}>
                    <td className={'text-warning'}>{row.out_user_id}</td>
                    <td className={'text-warning'}>{row.out_identity_type.name}</td>
                    <td className={'text-warning'}>{row.out_purse_type.name}</td>
                    <td className={'text-info'}>{row.into_user_id}</td>
                    <td className={'text-info'}>{row.into_identity_type.name}</td>
                    <td className={'text-info'}>{row.into_purse_type.name}</td>
                    <td>{Number(row.amount).toLocaleString()}</td>
                </tr>)}
                </tbody>
            </Table>
            </div>
        </div>
    );
}
