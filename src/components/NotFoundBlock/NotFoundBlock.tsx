import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
    return (
            <div className={styles.root}>
                <h1 >
                    <span>😕</span>
                    Ничего не найдено!
                </h1>
                <p className={styles.description}>
                    К сожалению, данная страница отсутствует в нашем интернет-магазине
                </p>
                {/*<p className={styles.description}>*/}
                {/*    <Link to={'/pizza/'}>*/}
                {/*        Перейти на главную !*/}
                {/*    </Link>*/}
                {/*</p>*/}
            </div>
        )

}
