import React, {useEffect, useState} from 'react';

import '../scss/app.scss';
import '../App.css';
import {Sort} from "../components/Sort";
import {Categories} from "../components/Categories";
import {PizzaBlock} from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import {PizzasType} from "../App";
import {Pagination} from "../components/Pagination/Paginations";
import {useDispatch, useSelector} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";



export const Home = (props: any) => {
    // @ts-ignore
    const category = useSelector(state => state.filter.categoryId);
    // @ts-ignore
    const sort = useSelector(state => state.filter.sort);
    const dispatch = useDispatch();


    const [pizzas, setPizzas] = useState<Array<PizzasType>>([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [page, setPage] = useState(1);

    const onClickCategory = (index: any) => {
        dispatch(setCategoryId(index))
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6538d707a543859d1bb20638.mockapi.io/pizza?${category > 0 ? `category=${category}` : ''
            }&sortBy=${sort.sort.replace('-', '')}&order=${sort.sort.includes('-') ? 'asc' : 'desc'}`
        )
            .then(res => res.json())
            .then(arr => {
                if(arr) {
                    setPizzas(arr);
                    setIsLoading(false);
                }
            });
            window.scrollTo(0, 0)
    }, [category, sort]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={category}
                    onClickCategory={onClickCategory}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading ? [... new Array(6)].map((_, index) => <Skeleton key={index} />)
                        :
                        pizzas
                            .filter(item => item.title.toLowerCase().includes(props.searchValue.toLowerCase()))
                            .map(pizza => {
                            return (
                                <PizzaBlock
                                    key={pizza.id}
                                    {...pizza}
                                />
                            )
                        })
                }

            </div>

            {/*<Pagination page={page} setPage={setPage} />*/}
        </div>
    );
}

