import React, {useState} from "react";

export const Categories = (props: any) => {

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые'
    ]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => props.onClickCategory(index)}
                                className={props.category === index ? 'active' : ''}
                            >{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
