import React from "react";
import { useWhyDidYouUpdate } from 'ahooks';

type CategoriesProps = {
    category: number,
    onClickCategory: (i: number) => void,
}

export const Categories: React.FC<CategoriesProps> = React.memo( (props) => {
    const categories: string[] = [
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
})
