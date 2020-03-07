import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import StatusNormal from "../../components/StatusNormal";
import {axios} from "../../helpers/axios";
import ButtonDelete from "../../components/ButtonDelete";
import {tips} from "../../helpers/functions";
import Pagination from "../../components/Pagination";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState({data: []});
    const [page, setPage] = React.useState(1);
    const [name, setName] = React.useState('');

    React.useEffect(() => {
        init();
    }, [page]);

    async function init(reset) {
        let p = reset ? 1 : page;
        let res = await axios.get('/purse_types', {params: {name, page: p}});
        setList(res);
    }

    async function del(id){
        await axios.delete('/purse_types/'+id);
        tips('删除成功', 'success');
        await init();
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init(true)}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>名称</Form.Label><Form.Control value={name} onChange={(e) => setName(e.target.value)}/></Form.Group>
                        <Form.Group><Button type={"submit"}>搜索</Button></Form.Group>
                    </div>
                </Form>
                <div className={'add'}><ButtonToolbar><Button variant={"primary"} onClick={()=> history.push('/purse_types/edit/0')}>添加</Button></ButtonToolbar></div>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>名称</th>
                    <th>英文别名</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {list.data.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.alias}</td>
                    <td><StatusNormal status={row.status}/></td>
                    <td>
                        <ButtonGroup size={"sm"}>
                            <Button onClick={()=> history.push('/purse_types/edit/'+row.id)}>编辑</Button>
                            <ButtonDelete onClick={() => del(row.id)}>删除</ButtonDelete>
                        </ButtonGroup>
                    </td>
                </tr>)}
                </tbody>
            </Table>
            <Pagination {...list} onChange={setPage} />
        </div>
    );
}
