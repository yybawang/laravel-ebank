import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import StatusNormal from "../../components/StatusNormal";
import {axios} from "../../helpers/axios";
import Pagination from "../../components/Pagination";
import ButtonPurseEnabled from "../../components/ButtonPurseEnabled";
import ButtonPurseDisabled from "../../components/ButtonPurseDisabled";
import {tips} from "../../helpers/functions";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState({data: []});
    const [page, setPage] = React.useState(1);
    const [identities, setIdentities] = React.useState([]);
    const [purses, setPurses] = React.useState([]);
    const [user_id, setUser_id] = React.useState('');
    const [identity_type_id, setIdentity_type_id] = React.useState('');
    const [purse_type_id, setPurse_type_id] = React.useState('');

    React.useEffect(()=> {
        getFilters();
    }, [])
;
    React.useEffect(() => {
        init();
    }, [page]);

    async function init(reset) {
        let p = reset ? 1 : page;
        let res = await axios.get('/purses', {params: {user_id, identity_type_id, purse_type_id, page: p}});
        setList(res);
    }

    async function getFilters(){
        let res2 = await axios.get('/purses/filters');
        setIdentities(res2.identities);
        setPurses(res2.purses);
    }

    async function enabled(id){
        await axios.put('/purses/enabled', {id});
        tips('开启成功', 'success');
        await init();
    }

    async function disabled(id){
        await axios.put('/purses/disabled', {id});
        tips('关闭完成', 'success');
        await init();
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init(true)}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>用户ID</Form.Label><Form.Control type={"number"} value={user_id} onChange={(e) => setUser_id(e.target.value)}/></Form.Group>
                        <Form.Group><Form.Label>身份类型</Form.Label><Form.Control as={'select'} onChange={e => setIdentity_type_id(e.target.value)}>
                            <option value={0}>-筛选-</option>
                            {identities.map(identity =>
                                <option key={identity.id} value={identity.id}>{identity.name}</option>
                            )}
                        </Form.Control></Form.Group>
                        <Form.Group><Form.Label>钱包类型</Form.Label><Form.Control as={'select'} onChange={e => setPurse_type_id(e.target.value)}>
                            <option value={0}>-筛选-</option>
                            {purses.map(purse =>
                                <option key={purse.id} value={purse.id}>{purse.name}</option>
                            )}
                        </Form.Control></Form.Group>
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
                    <th>总金额</th>
                    <th>冻结金额</th>
                    <th>可用金额</th>
                    <th>钱包状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {list.data.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.user_id}</td>
                    <td>{row.identity_type.name}</td>
                    <td>{row.purse_type.name}</td>
                    <td>{(Number(row.balance) + Number(row.freeze)).toLocaleString()}</td>
                    <td>{Number(row.freeze).toLocaleString()}</td>
                    <td>{Number(row.balance).toLocaleString()}</td>
                    <td><StatusNormal status={row.status}/></td>
                    <td>
                        <ButtonGroup size={"sm"}>
                            {row.status === 0 && <ButtonPurseEnabled onClick={()=> enabled(row.id)}>启用</ButtonPurseEnabled>}
                            {row.status === 1 && <ButtonPurseDisabled onClick={()=> disabled(row.id)}>禁用</ButtonPurseDisabled>}
                        </ButtonGroup>
                    </td>
                </tr>)}
                </tbody>
            </Table>
            <Pagination {...list} onChange={setPage} />
        </div>
    );
}
