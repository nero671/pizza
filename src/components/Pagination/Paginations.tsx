import React from "react";

type PaginationType = {
    onChangePage: (i: number) => void,
    page: number,
}
export const Pagination: React.FC<PaginationType> = (props) => {

    return (
        <ul className='pagination'>
            {
                [...Array(3)].map((item, i: number) => {
                    return (
                        <li
                            onClick={() => props.onChangePage(i + 1)}
                            className={props.page === i + 1 ? 'pagination-item active' : 'pagination-item'}
                            key={i}
                        >{i + 1}</li>
                    )
                })
            }
        </ul>
    )
}
