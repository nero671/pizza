import React, {useState} from "react";

export const Pagination = (props: any) => {

    return (
        <ul className='pagination'>
            {
                [...Array(3)].map((item, i) => {
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
