import {useState} from 'react';
import Logo from '../../assets/Images/LogoOlimp.svg'
import {Menu, Button, Drawer, ConfigProvider} from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import styles from './Navigation.module.scss';
import {items} from "./Navigation.config.ts";
import navigationStyles from "./Navigation.styles.ts";

const Navigation = () => {
    const [visible, setVisible] = useState(false);

    const toggleDrawer = () => {
        setVisible(!visible);
    };

    return (
        <ConfigProvider theme={navigationStyles}>
            <div className={styles.navigation__wrapper}>
                <img className={styles.logo} src={Logo} alt="Logo"/>
                <Menu mode="horizontal" className={styles.desktopMenu} items={items}/>
                <div className={styles.mobileMenu}>
                    <Button type="primary" icon={<MenuOutlined/>} onClick={toggleDrawer}/>
                    <Drawer
                        title="Меню"
                        placement="right"
                        onClose={toggleDrawer}
                        open={visible}
                    >
                        <Menu mode="vertical" items={items}/>
                    </Drawer>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Navigation;
