import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {axios} from "../../helpers/axios";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState([]);
    const [identities, setIdentities] = React.useState([]);
    const [purses, setPurses] = React.useState([]);
    const [identity_id, setIdentity_id] = React.useState('');
    const [identity_type, setIdentity_type] = React.useState('');
    const [wallet_type_id, setWallet_type_id] = React.useState('');

    React.useEffect(() => {
        init();
        getFilters();
    }, []);

    async function init() {
        let res = await axios.get('/reports/transfer', {params: {identity_id, identity_type, wallet_type_id}});
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
                        <Form.Group><Form.Label>身份ID</Form.Label><Form.Control type={"number"} value={identity_id} onChange={(e) => setIdentity_id(e.target.value)}/></Form.Group>
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
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
            </div>
            <div className={'overflow-scroll'}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>身份ID</th>
                    <th>身份类型</th>
                    <th>钱包类型</th>
                    <th>交易总量</th>
                </tr>
                </thead>
                <tbody>
                {list.map(row => <tr key={row.identity_id+row.identity_type+row.wallet_type_id}>
                    <td>{row.identity_id}</td>
                    <td>{row.identity_type}</td>
                    <td>{row.wallet_type.name}</td>
                    <td>{Number(row.amount).toFixed(4)}</td>
                </tr>)}
                </tbody>
            </Table>
            </div>
        </div>
    );
}
