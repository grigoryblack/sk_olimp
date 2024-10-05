import { Card as AntCard, ConfigProvider } from 'antd';
import cardStyles from "./Card.styles.ts"; // Импорт стилей для конфигурации темы

interface CustomCardProps {
    imageUrl: string;
    children: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, imageUrl }) => {
    return (
        <ConfigProvider theme={cardStyles}>
            <AntCard
                hoverable
                cover={<img src={imageUrl}  alt="Работа"/>}
            >
                {children}
            </AntCard>
        </ConfigProvider>
    );
};

export default CustomCard;
