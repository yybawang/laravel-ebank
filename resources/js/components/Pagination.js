import React from "react";
import {Pagination} from "react-bootstrap";

export default (props) => {
    const [prevEllipsis, setPrevEllipsis] = React.useState([]);
    const [nextEllipsis, setNextEllipsis] = React.useState([]);
    const [pages, setPages] = React.useState(0);

    React.useEffect(() => {
        let prevCount = Math.min(5, Math.max((props.current_page || 1) - 1, 0));
        setPrevEllipsis(Array(prevCount).fill(0));
        let nextCount = Math.min(5, Math.max((props.last_page - props.current_page || 0), 0));
        setNextEllipsis(Array(nextCount).fill(0));
        setPages(props.last_page);
    }, [props.current_page]);

    return (
        <div className={'flex justify-end'}>
            {pages > 1 && <Pagination>
                <Pagination.First disabled={props.current_page === 1} onClick={() => props.onChange(1)} />
                <Pagination.Prev disabled={props.current_page === 1} onClick={() => props.onChange(props.current_page - 1)} />
                {props.current_page > 6 && <Pagination.Ellipsis /> }
                {prevEllipsis.map((v, k) =>
                    <Pagination.Item key={k} onClick={()=> props.onChange(props.current_page - prevEllipsis.length + k )}>{props.current_page - prevEllipsis.length + k}</Pagination.Item>
                )}
                <Pagination.Item active={true}>{props.current_page}</Pagination.Item>
                {nextEllipsis.map((v, k) =>
                    <Pagination.Item key={k} onClick={()=> props.onChange(props.current_page + k + 1)}>{props.current_page + k + 1}</Pagination.Item>
                )}
                {props.last_page - props.current_page > 6 && <Pagination.Ellipsis /> }
                <Pagination.Next disabled={props.last_page === props.current_page}  onClick={() => props.onChange(props.current_page + 1)} />
                <Pagination.Last disabled={props.last_page === props.current_page} onClick={() => props.onChange(props.last_page)} />
            </Pagination>}
        </div>
    );
}
