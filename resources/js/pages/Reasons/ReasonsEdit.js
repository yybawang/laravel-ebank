import React from "react";
import {useParams, useHistory} from 'react-router-dom'
import {Button, Form} from "react-bootstrap";
import {axios} from "../../helpers/axios";
import {tips} from "../../helpers/functions";

export default (props) => {
    const history = useHistory();
    const params = useParams();
    const [form, setForm] = React.useState({});
    const [identities, setIdentities] = React.useState([]);
    const [purses, setPurses] = React.useState([]);
    const [max, setMax] = React.useState(0);
    const focus = React.useRef(null);

    React.useEffect(()=> {
        init();
    }, []);

    React.useEffect(()=> {
        if(form.wallet_type_id <= 0){
            return;
        }
        let code = 200000000 + (100000 + (max + 1) * 1000) + Number(form.wallet_type_id);
        setForm(Object.assign({}, form, {code}));
    }, [form.wallet_type_id]);

    async function init(){
        let res = await axios.get('/reasons/'+params.id);
        focus.current.focus();
        setMax(res.max);
        setForm(res.data);
        setPurses(res.purses);
    }

    async function submit(){
        await axios.post('/reasons', form);
        tips('提交完成', 'success');
        history.goBack();
    }

    return (
        <div>
            <Form onSubmit={e => {e.preventDefault();submit()}}>
                <Form.Group>
                    <Form.Label>行为名称</Form.Label>
                    <Form.Control ref={focus} value={form.name} onChange={e => setForm(Object.assign({}, form, {name: e.target.value}))} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>绑定身份类型，只输入模型名将自动在 \App 以及 \App\Models 中查找</Form.Label>
                    <Form.Control value={form.identity} onChange={e => setForm(Object.assign({}, form, {identity: e.target.value}))} placeholder={'输入进出帐用户模型名 [User|Admin]'} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>出帐钱包</Form.Label>
                    <Form.Control as={'select'} value={form.wallet_type_id} onChange={e => {setForm(Object.assign({}, form, {wallet_type_id: Number(e.target.value)}));}}>
                        <option value={0}>--请选择--</option>
                        {purses.map(purse =>
                            <option key={purse.id} value={purse.id}>{purse.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reason 代码</Form.Label>
                    <Form.Control type={'number'} value={form.code} onChange={e => setForm(Object.assign({}, form, {code: e.target.value}))} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>状态</Form.Label>
                    <Form.Group>
                    <Form.Check inline type={'radio'} label={'禁用'} name={'status'} value={0} checked={form.status === 0} id={'status0'} onChange={e=> setForm(Object.assign({}, form, {status: Number(e.target.value)}))} />
                    <Form.Check inline type={'radio'} label={'启用'} name={'status'} value={1} checked={form.status === 1} id={'status1'} onChange={e=> setForm(Object.assign({}, form, {status: Number(e.target.value)}))} />
                    </Form.Group>
                </Form.Group>
                <Form.Group>
                    <Form.Label>备注</Form.Label>
                    <Form.Control value={form.remarks} onChange={e => setForm(Object.assign({}, form, {remarks: e.target.value}))} />
                </Form.Group>
                <Form.Group>
                    <Button type={"submit"}>提交</Button>
                    <Button className={'ml-3'} variant={"secondary"} onClick={() => history.goBack()}>返回</Button>
                </Form.Group>
            </Form>
        </div>
    );
}
