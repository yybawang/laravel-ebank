import React from "react";
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {datetime} from "../helpers/functions";

export default (props) => {
    const [dateStart, setDateStart] = React.useState('');
    const [dateEnd, setDateEnd] = React.useState('');

    React.useEffect(()=> {
        let date_start = datetime(dateStart);
        let date_end = datetime(dateEnd);
        // 给父组件返回一个数组
        props.onChange([date_start, date_end]);
    }, [dateStart, dateEnd]);

    return (
        [
            <Form.Group key={'start'}><Form.Label>开始日期</Form.Label><DatePicker className={'form-control'} selected={dateStart} onChange={setDateStart} showTimeSelect dateFormat={'yyyy-MM-dd HH:mm:ss'} timeFormat={"HH:mm"} maxDate={new Date()} /></Form.Group>,
            <Form.Group key={'stop'}><Form.Label>结束日期</Form.Label><DatePicker className={'form-control'} selected={dateEnd} onChange={setDateEnd} showTimeSelect dateFormat={'yyyy-MM-dd HH:mm:ss'} timeFormat={"HH:mm"} minDate={new Date(dateStart)} maxDate={new Date()} /></Form.Group>
        ]
    );
}
