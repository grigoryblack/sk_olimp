import styles from './Portfolio.module.scss';
import Card from "../../widgets/Card/Card.tsx";
import cardsConfig from "../../widgets/Card/cardsConfig.ts";

const Portfolio = () => {
    return (
        <section id="portfolio" className={styles.portfolio__wrapper}>
            <div className={styles.portfolio__container}>
                <h2>Наши работы</h2>
                <div className={styles.cards}>
                    {cardsConfig.map((card, index) => (
                        <Card
                            key={index}
                            imageUrl={card.images[0]}
                            >
                            <div className={styles.card__inner}>
                                <p>{card.title}</p>
                                <button className={styles.check_work__button}>Посмотреть работу</button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;