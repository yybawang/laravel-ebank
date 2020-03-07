import React from "react";
import {useParams, useHistory} from 'react-router-dom'
import {Button, ButtonToolbar, Form} from "react-bootstrap";
import {axios} from "../../helpers/axios";
import {tips} from "../../helpers/functions";

export default (props) => {
    const history = useHistory();
    const params = useParams();
    const [form, setForm] = React.useState({});
    const [identities, setIdentities] = React.useState([]);
    const [purses, setPurses] = React.useState([]);
    const [max, setMax] = React.useState('');
    const focus = React.useRef(null);

    React.useEffect(()=> {
        init();
    }, []);

    React.useEffect(()=> {
        if(form.reason || form.out_identity_type_id <= 0 || form.out_purse_type_id <= 0 || form.into_identity_type_id <= 0 || form.into_purse_type_id <= 0){
            return;
        }
        let reason = max.padEnd(3, '0')+(form.out_identity_type_id+'').padStart(2, '0')+(form.out_purse_type_id+'').padStart(2, '0')+(form.into_identity_type_id+'').padStart(2, '0')+(form.into_purse_type_id+'').padStart(2, '0');
        setForm(Object.assign({}, form, {reason}));
    }, [form.out_identity_type_id, form.out_purse_type_id, form.into_identity_type_id, form.into_purse_type_id]);

    async function init(){
        let res = await axios.get('/reasons/'+params.id);
        focus.current.focus();
        setMax(res.max+'');
        setForm(res.reason);
        setIdentities(res.identities);
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
                    <Form.Label>出帐身份</Form.Label>
                    <Form.Control as={'select'} onChange={e => {setForm(Object.assign({}, form, {out_identity_type_id: e.target.value}));}}>
                        <option value={0}>--请选择--</option>
                        {identities.map(identity =>
                            <option key={identity.id} value={identity.id} selected={form.out_identity_type_id === identity.id}>{identity.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>出帐钱包</Form.Label>
                    <Form.Control as={'select'} onChange={e => {setForm(Object.assign({}, form, {out_purse_type_id: e.target.value}));}}>
                        <option value={0}>--请选择--</option>
                        {purses.map(purse =>
                            <option key={purse.id} value={purse.id} selected={form.out_purse_type_id === purse.id}>{purse.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>入帐身份</Form.Label>
                    <Form.Control as={'select'} onChange={e => {setForm(Object.assign({}, form, {into_identity_type_id: e.target.value}));}}>
                        <option value={0}>--请选择--</option>
                        {identities.map(identity =>
                            <option key={identity.id} value={identity.id} selected={form.into_identity_type_id === identity.id}>{identity.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>入帐钱包</Form.Label>
                    <Form.Control as={'select'} onChange={e => {setForm(Object.assign({}, form, {into_purse_type_id: e.target.value}));}}>
                        <option value={0}>--请选择--</option>
                        {purses.map(purse =>
                            <option key={purse.id} value={purse.id} selected={form.into_purse_type_id === purse.id}>{purse.name}</option>
                        )}
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reason</Form.Label>
                    <Form.Control type={'number'} value={form.reason} onChange={e => setForm(Object.assign({}, form, {reason: e.target.value}))} />
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
