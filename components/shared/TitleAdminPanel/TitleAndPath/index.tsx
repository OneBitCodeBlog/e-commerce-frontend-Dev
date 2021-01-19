import React from 'react';
import styles from './styles.module.css';

interface TitleAndPath {
    title: String,
    path: String
}

const TitleAndPath: React.FC<TitleAndPath> = ({title, path}) => {
    return (
        <>
            <h4>{ title }</h4>
            <span className={styles.styledPath}>{ path }</span>
        </>
    )
}

export default TitleAndPath;