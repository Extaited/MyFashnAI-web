import s from './Footer.module.scss'

import { ReactComponent as Telegram } from '../../assets/icons/Vector.svg'

export const Footer = () => {
    return (
        <div className={s['footer']}>
            <div className={s['footer__container']}>
                <div className={s['footer__logo']}>
                    <span className={`${s['footer__text']} ${s['footer__text--title']}`}>MyFashionAI</span>
                    <span className={`${s['footer__text']} ${s['footer__text--description']}`}>Прозрачный сервис<br/> для подбора образов</span>
                </div>
                <span className={s['footer__permissions']}>2025 © Все права защищены MyFashnAI</span>
                <div className={s['footer__social']}>
                    Мы в соц. сетях
                    <Telegram className={s['icon']} />
                </div>
            </div>
        </div>
    )
}