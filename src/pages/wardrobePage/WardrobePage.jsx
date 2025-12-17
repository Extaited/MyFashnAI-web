import { CardItem } from '../../components/cardItem/CardItem'
import { Footer } from '../../components/footer/Footer'
import s from './WardrobePage.module.scss'

import cardImage1 from '../../assets/images/card9.png'

import { ReactComponent as NewIcon } from '../../assets/icons/arrow-up-circle.svg'
import { ReactComponent as AddIcon } from '../../assets/icons/plus-circle.svg'
import { useEffect, useRef } from 'react'

export const WardrobePage = () => {

    const topRef = useRef(null)
    const loverRef = useRef(null)
    const shoesRef = useRef(null)

    useEffect(() => {
        const refs = [topRef.current, loverRef.current, shoesRef.current]

        const handleWheel = (e) => {
            e.preventDefault()
            e.currentTarget.scrollLeft += e.deltaY
        }

        refs.forEach((ref) => {
            if (ref) {
                ref.addEventListener('wheel', handleWheel, { passive: false })
            }
        })

        return () => {
            refs.forEach((ref) => {
                if (ref) {
                    ref.removeEventListener('wheel', handleWheel)
                }
            })
        }
    }, [])

    const itemsConfig = {
        top: [
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            }
        ],
        lover: [
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            }
        ],
        shoes: [
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            },
            {
                name: 'Special Items Knit Crew Men',
                rating: 4.6,
                image: cardImage1
            }
        ]
    }

    return (
        <div className={s['page']}>
            <div className={s['page__title']}>
                Мой гардероб
                <button className={s['page__new-button']}>
                    <NewIcon className={s['icon']} />
                    Найти что-то новое
                </button>
            </div>
            <div className={s['page__section']}>
                Верхние элементы
                <div ref={topRef} className={s['page__card-wrapper']}>
                    {itemsConfig.top.map((card) => {
                        return (
                            <CardItem
                                key={card.name}
                                config={card}
                            />
                        )
                    })}
                    <button className={s['add-button']}>
                        <AddIcon className={s['add-icon']} />
                    </button>
                </div>
            </div>
            <div className={s['page__section']}>
                Нижние элементы образов
                <div ref={loverRef} className={s['page__card-wrapper']}>
                    {itemsConfig.lover.map((card) => {
                        return (
                            <CardItem
                                key={card.name}
                                config={card}
                            />
                        )
                    })}
                    <button className={s['add-button']}>
                        <AddIcon className={s['add-icon']} />
                    </button>
                </div>
            </div>
            <div className={s['page__section']}>
                Обувь
                <div ref={shoesRef} className={s['page__card-wrapper']}>
                    {itemsConfig.shoes.map((card) => {
                        return (
                            <CardItem
                                key={card.name}
                                config={card}
                            />
                        )
                    })}
                    <button className={s['add-button']}>
                        <AddIcon className={s['add-icon']} />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}