import { motion, AnimatePresence } from 'framer-motion'
import s from './CardLook.module.scss'

import { ReactComponent as ViewIcon } from '../../assets/icons/eye.svg'
import { ReactComponent as LikeIcon } from '../../assets/icons/heart.svg'
import { ReactComponent as RatingIcon } from '../../assets/icons/star.svg'

export const CardLook = ({ config }) => {
    const cardVariants = {
        initial: { opacity: 0, y: 50, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        hover: { scale: 1.02 }
    }

    const imageVariants = {
        initial: { filter: 'brightness(1)' },
        animate: { filter: 'brightness(1)' },
        hover: { filter: 'brightness(0.8)' }
    }

    return (
        <AnimatePresence mode='wait'>
            <motion.div 
                className={s['card']}
                variants={cardVariants}
                initial='initial'
                animate='animate'
                exit='initial'
                whileHover="hover"
                transition={{ duration: 0.3, type: 'tween', ease: 'easeOut' }}
            >
                <motion.img
                    src={config.image}
                    className={s['card__image']}
                    alt='Look card image'
                    variants={imageVariants}
                    transition={{ duration: 0.3, type: 'spring', ease: 'easeOut' }}
                />
                <div className={s['card__front']}>
                    <div className={s['card__view']}>
                        {config.canView && <span className={s['card__view-wrapper']}><ViewIcon className={s['icon']} /></span>}
                    </div>
                    <div className={s['card__info']}>
                        <div className={s['card__info-wrapper']}>
                            <span className={s['card__name']}>{config.name}</span>
                            <div className={s['card__rating']}>
                                <RatingIcon className={s['icon']} />
                                <span className={s['card__rating-text']}>{config.rating >= 3 ? config.rating + ' | Популярн' : config.rating + ' | Не популярен'}</span>
                            </div>
                        </div>
                        <button className={s['like-button']}>
                            <LikeIcon className={s['icon']} />
                        </button>
                    </div>                
                </div>
            </motion.div>
        </AnimatePresence>
    )
}