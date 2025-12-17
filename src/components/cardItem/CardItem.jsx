import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import s from './CardItem.module.scss'

import { ReactComponent as DeleteIcon } from '../../assets/icons/minus.svg'
import { ReactComponent as RatingIcon } from '../../assets/icons/star.svg'

export const CardItem = ({ config }) => {
    const [hoverValue, setHoverValue] = useState(0)

    const cardVariants = {
        initial: { opacity: 0, y: 50, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 }
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
                        <span className={s['card__view-wrapper']}><DeleteIcon className={s['icon']} /></span>
                    </div>
                    <div className={s['card__info']}>
                        <div className={s['card__info-wrapper']}>
                            <span className={s['card__name']}>{config.name}</span>
                            <div className={s['card__rating']}>
                                <span className={s['card__rating-text']}>
                                    Ваша оценка: 
                                </span>
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <RatingIcon
                                        key={index}
                                        className={`${s['star']} ${hoverValue > index ? s['filled'] : ''}`}
                                        onMouseEnter={() => setHoverValue(index + 1)}
                                        onMouseLeave={() => setHoverValue(0)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>                
                </div>
            </motion.div>
        </AnimatePresence>
    )
}