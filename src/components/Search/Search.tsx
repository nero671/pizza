import React, {useCallback, useContext, useRef, useState} from "react";

import styles from "./Search.module.scss";
import {SearchContext} from "../../App";
// @ts-ignore
import debounce from 'lodash.debounce';

export const Search = (props: any) => {
    const [value, setValue] = useState('');
    // @ts-ignore
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        // @ts-ignore
        inputRef.current.focus();
    }

    const updateSearchValue = useCallback(
        debounce((str: any) => {
            setSearchValue(str);
        }, 450), []
    )

    // @ts-ignore
    const onChangeInput = (event) => {
        setValue(event.currentTarget.value);
        updateSearchValue(event.currentTarget.value);
    }

    return (
        <div className={styles.root}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L23.4142 22L22 23.4142L15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z" fill="black"/></svg>
            <input
                // @ts-ignore
                ref={inputRef}
                className={styles.input}
                placeholder="Поиск пиццы...."
                // @ts-ignore
                onChange={onChangeInput}
                value={value}
            />

            {
                value && (
                    <svg onClick={onClickClear} className={styles.clearIcon} version="1.1" viewBox="0 0 24 24"><g id="grid_system"/><g id="_icons"><path d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"/></g></svg>
                )
            }
        </div>
    )
}
