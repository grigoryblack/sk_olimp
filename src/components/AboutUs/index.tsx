import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <section id="about" className={styles.about__wrapper}>
            <div className={styles.about__container}>
                <h2>О нас</h2>
                <div className={styles.container__inner}>
                    <p>
                        Мы — строительная компания <span>Олимп</span>
                        , специализирующаяся на дизайне и&nbsp;отделке жилых интерьеров.
                        На&nbsp;рынке мы работаем более трех лет и&nbsp;успешно завершили свыше 40 проектов.
                        Мы&nbsp;превращаем дизайнерские идеи в&nbsp;реальность, воплощая мечты наших дорогих клиентов.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;