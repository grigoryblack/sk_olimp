import styles from './Services.module.scss';
import {CheckOutlined} from '@ant-design/icons'
const Services = () => {
    return (
        <section id="services" className={styles.services__wrapper}>
            <div className={styles.services__container}>
                <h2>Наши услуги</h2>
                <div className={styles.container__inner}>
                    <p>
                        Мы приглашаем вас лично оценить качество наших работ.
                        Наш консультант проведет экскурсию сразу по&nbsp;нескольким объектам,
                        где вы сможете убедиться в&nbsp;неизменно высоком уровне исполнения.
                    </p>
                </div>
                <div className={styles.container__inner}>
                    <p>
                        Полностью закроем Ваши задачи по объекту:
                    </p>
                    <ul>
                        <li><span><CheckOutlined /></span> Консультации по недвижимости и бюджету</li>
                        <li><span><CheckOutlined /></span> Дизайн проект</li>
                        <li><span><CheckOutlined /></span> Ремонт</li>
                        <li><span><CheckOutlined /></span> Снабжение мебелью и чистовыми материалами</li>
                        <li><span><CheckOutlined /></span> Снабжение черновыми материалами</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;