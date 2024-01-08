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
import {setCategoryId, setPageCount} from "../redux/slices/filterSlice";
import axios from "axios";
import qs from 'qs';
import { JSX } from 'react/jsx-runtime';
import {setItems, fetchPizzas} from "../redux/slices/pizzaSlice";


export const Home = (props: any) => {
    // @ts-ignore
    const category = useSelector(state => state.filter.categoryId);
    // @ts-ignore
    const sort = useSelector(state => state.filter.sort);
    // @ts-ignore
    const pageCount = useSelector(state => state.filter.pageCount)
    // @ts-ignore
    const { items, status } = useSelector(state => state.pizza);
    const dispatch = useDispatch();


    // const [pizzas, setPizzas] = useState<Array<PizzasType>>([]);

    const onClickCategory = (index: any) => {
        dispatch(setCategoryId(index))
    }

    const onChangePage = (num: number) => {
        dispatch(setPageCount(num))
    }

    const getPizzas = async () => {
        // @ts-ignore
        dispatch(fetchPizzas({
            category,
            sort
        }));

        window.scrollTo(0, 0);
    }

    // useEffect(() => {
    //     setIsLoading(true);
    //     axios.get(`https://6538d707a543859d1bb20638.mockapi.io/pizza?${category > 0 ? `category=${category}` : ''
    //     }&sortBy=${sort.sort.replace('-', '')}&order=${sort.sort.includes('-') ? 'asc' : 'desc'}`)
    //         .then((response) => {
    //             if (response.data) {
    //                 dispatch(setItems(response.data));
    //                 setIsLoading(false);
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             setIsLoading(false);
    //         })
    //
    //     window.scrollTo(0, 0)
    // }, [category, sort]);

    useEffect(() => {
        getPizzas();
    }, [category, sort]);





    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    category={category}
                    onClickCategory={onClickCategory}
                />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    status === 'loading' ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        :
                        items
                            .filter((item: { title: string; }) => item.title.toLowerCase().includes(props.searchValue.toLowerCase()))
                            .map((pizza: JSX.IntrinsicAttributes & PizzasType) => {
                            return (
                                <PizzaBlock
                                    key={pizza.id}
                                    {...pizza}
                                />
                            )
                        })
                }

            </div>

            {/*<Pagination page={pageCount} onChangePage={onChangePage} />*/}
        </div>
    );
}

