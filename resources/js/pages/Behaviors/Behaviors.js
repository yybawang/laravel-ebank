import React from "react";
import {Button, ButtonGroup, ButtonToolbar, Form, Modal, Table} from "react-bootstrap";
import {useHistory} from 'react-router-dom';
import {axios} from "../../helpers/axios";
import Pagination from "../../components/Pagination";

export default (props) => {
    const history = useHistory();
    const [list, setList] = React.useState({data: []});
    const [page, setPage] = React.useState(1);
    const [funcnames, setFuncnames] = React.useState([]);
    const [funcname, setFuncname] = React.useState('');
    const [detail, setDetail] = React.useState({});
    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        init();
    }, [page]);

    async function init(reset) {
        let p = reset ? 1 : page;
        let res = await axios.get('/behaviors', {params: {funcname, page: p}});
        setList(res.behaviors);
        setFuncnames(res.funcnames);
    }

    async function show(id){
        let res = await axios.get('/behaviors/'+id);
        setDetail(res);
        setVisible(true);
    }

    return (
        <div>
            <div className={'head-filters py-2'}>
                <Form onSubmit={(e) => {e.preventDefault();init(true)}}>
                    <div className={'flex flex-wrap filters'}>
                        <Form.Group><Form.Label>接口名</Form.Label><Form.Control as={'select'} onChange={e => setFuncname(e.target.value)}>
                            <option value={''}>--筛选--</option>
                            {Object.keys(funcnames).map(name =>
                                <option key={name} value={name}>{funcnames[name]}</option>
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
                    <th>方法名</th>
                    <th>中文释义</th>
                    <th>执行时间</th>
                    <th>调用时间</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {list.data.map(row => <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.funcname}</td>
                    <td>{funcnames[row.funcname] || '未知'}</td>
                    <td>{row.execute_time}</td>
                    <td>{row.created_at}</td>
                    <td>
                        <ButtonGroup size={"sm"}>
                            <Button variant={"primary"} onClick={()=> show(row.id)}>详情</Button>
                        </ButtonGroup>
                    </td>
                </tr>)}
                </tbody>
            </Table>
            <Pagination {...list} onChange={setPage} />

            <Modal show={visible} onHide={()=> setVisible(false)} size={"lg"}>
                <Modal.Header closeButton><Modal.Title><h4>方法调用详情</h4></Modal.Title></Modal.Header>
                <Modal.Body>
                    <div className={'py-2'}>
                        <div><code>ID</code></div>
                        <div className={'bg-muted p-2'}>{detail.id}</div>
                    </div>
                    <div className={'py-2'}>
                        <div><code>方法名</code></div>
                        <div className={'bg-muted p-2'}>{detail.funcname}</div>
                    </div>
                    <div className={'py-2'}>
                        <div><code>执行时间(s)</code></div>
                        <div className={'bg-muted p-2'}>{detail.execute_time}</div>
                    </div>
                    <div className={'py-2'}>
                        <div><code>参数</code></div>
                        <pre className={'bg-muted w-100 border-0 p-2'}>
                            {JSON.stringify(detail.params, null, 2)}
                        </pre>
                    </div>
                    <div className={'py-2'}>
                        <div><code>返回值</code></div>
                        <div className={'bg-muted p-2'}>{detail.response}</div>
                    </div>
                    <div className={'py-2'}>
                        <div><code>调用时间</code></div>
                        <div className={'bg-muted p-2'}>{detail.created_at}</div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
