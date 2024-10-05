import styles from './Loader.module.scss';
const Loader = () => {
    return (
        <div className={styles.loader__wrapper}>
            <span className={styles.loader}></span>
        </div>

    );
};

export default Loader;