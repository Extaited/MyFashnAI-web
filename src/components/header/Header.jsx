import { useNavigate, Link, Outlet } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { motion , AnimatePresence} from 'framer-motion'
import s from './Header.module.scss'

import { ReactComponent as NotificationsIcon } from '../../assets/icons/bell.svg'
import { ReactComponent as BurgerIcon } from '../../assets/icons/menu.svg'
/* import { ReactComponent as WardrobeIcon } from '../../assets/icons/shopping-cart.svg'
import { ReactComponent as CatalogIcon } from '../../assets/icons/shopping-bag.svg'
import { ReactComponent as ProfileIcon } from '../../assets/icons/user.svg'
import { ReactComponent as CloseIcon } from '../../assets/icons/log-out.svg' */

const animation_config = {
    duration: 0.27,
    type: 'spring',
    delay_step: 0.06
}

const nav_items = [
    { to: '/wardrobe', label: 'Мой гардероб', icon: null }, // иконки выглядят криво поэтому лучше без них
    { to: '/items', label: 'Каталог вещей', icon: null },
    { to: '/favorites', label: 'Избранное', icon: null },
    { to: '/profile', label: 'Профиль', icon: null },
    { to: '/', label: 'Выйти', icon: null }
]

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const burgerRef = useRef(null)
    const navigate = useNavigate()

    const variants = {
        hide: {
            y: -45,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    const toggleMenu = () => setIsOpen(prev => !prev)
    const closeMenu = () => setIsOpen(false)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (burgerRef.current && !burgerRef.current.contains(e.target)) {
                closeMenu()
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <>
            <header className={s['header']}>
                <div
                    onClick={() => navigate('/')}
                    className={s['header__logo']}
                >
                    <span>MyFashn AI</span>
                </div>
                <div className={s['header__actions']}>
                    <div className={s['header__notifications']}>
                        <NotificationsIcon className={s['icon']} />
                    </div>
                    <div className={s['user-info']}>
                        <img
                            className={s['user-info__avatar']}
                            src='https://i.pinimg.com/originals/d0/a0/60/d0a060660afc2e5164b1711e717c8cd8.jpg'
                            alt='User avatar'
                        />
                        <div className={s['user-info__details']}>
                            <span className={s['user-info__welcome']}>Удачного дня</span>
                            <span className={s['user-info__name']}>Алексей!</span>
                        </div>
                    </div>
                    <div className={s['burger']} ref={burgerRef}>
                        <div
                            onClick={toggleMenu}
                            className={s['burger__menu']}
                        >
                            <BurgerIcon className={s['icon']} />
                        </div>
                        <AnimatePresence mode='wait'>
                            {isOpen && (
                            <ul className={s['burger__dropdown']}>
                                {nav_items.map((item, index) => {
                                    return (
                                        <motion.li
                                            key={item.label}
                                            variants={variants}
                                            initial='hide'
                                            animate='show'
                                            exit='hide'
                                            transition={{
                                                duration: animation_config.duration,
                                                type: animation_config.type,
                                                delay: index * animation_config.delay_step
                                            }}
                                            className={s['burger__item']}
                                        >
                                            <Link
                                                className={s['link']}
                                                to={item.to}
                                                onClick={closeMenu}
                                            >
                                                {item?.icon && <item.icon className={s['icon']} />}
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    )
                                })}
                            </ul>
                        )}
                        </AnimatePresence>
                    </div>
                </div>
            </header>
            <Outlet />
        </>
    )
}
