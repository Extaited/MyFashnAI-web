import { useForm, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Filter } from '../../components/shared/filter/Filter'
import { CardLook } from '../../components/cardLook/CardLook'
import { Footer } from '../../components/footer/Footer'
import s from './ItemsPage.module.scss'  // Note: You'll need to create/rename the SCSS file accordingly if styles differ

import cardImage1 from '../../assets/images/card9.png'

import { ReactComponent as InputIcon } from '../../assets/icons/search.svg'

export const ItemsPage = () => {
    const { control, setValue } = useForm({
        defaultValues: {
            search: '',
            categories: '',
            color: '',
            details: '',
            season: '',
            sort: '',
            popular: false,
            new: false,
            forYou: false
        }
    })

    const boardVariants = {
        hidden: {
            y: 50,
            opacity: 0,
            rotate: -2,
            scale: 0.95
        },
        visible: {
            y: 0,
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: {
                type: 'spring',
                damping: 15,
                stiffness: 120,
                duration: 0.3
            }
        }
    }

    const filterConfig = [
        {
            label: 'Категории',
            name: 'categories',
            type: 'dropdown',
            default: 'default',
            items: [
                {
                    label: 'Категория 1',
                    value: 'category_1',
                    icon: null
                },
                {
                    label: 'Категория 2',
                    value: 'category_2',
                    icon: null
                }
            ]
        },
        {
            label: 'Цвет',
            name: 'color',
            type: 'dropdown',
            default: 'default',
            items: [
                {
                    label: 'цвет 1',
                    value: 'color_1',
                    icon: null
                }, 
                {
                    label: 'цвет 2',
                    value: 'color_2',
                    icon: null
                }
            ]
        },
        {
            label: 'Детали',
            name: 'details',
            type: 'dropdown',
            default: 'default',
            items: [
                {
                    label: 'Деталь 1',
                    value: 'detail_1',
                    icon: null
                },
                {
                    label: 'Деталь 2',
                    value: 'detail_2',
                    icon: null
                }
            ]
        },
        {
            label: 'Сезон',
            name: 'season',
            type: 'dropdown',
            default: 'default',
            items: [
                {
                    label: 'Сезон 1',
                    value: 'season_1',
                    icon: null
                },
                {
                    label: 'Сезон 2',
                    value: 'season_2',
                    icon: null
                }
            ]
        },
        {
            label: 'Сортировка',
            name: 'sort',
            type: 'dropdown',
            default: 'default',
            items: [
                {
                    label: 'По цене',
                    value: 'sort_1',
                    icon: null
                },
                {
                    label: 'Новые',
                    value: 'sort_2',
                    icon: null
                }
            ]
        },
        {
            label: 'Популярное',
            name: 'popular',
            type: 'checkbox'
        },
        {
            label: 'Новое',
            name: 'new',
            type: 'checkbox'
        },
        {
            label: 'Для вас',
            name: 'forYou',
            type: 'checkbox'
        }
    ]

    const cardConfig = [
        {
            name: 'Special Items Knit Crew Men',
            rating: 4.6,
            image: cardImage1,
            canView: false
        },
        {
            name: 'Special Items Knit Crew Men1',
            rating: 4.6,
            image: cardImage1,
            canView: true
        },
        {
            name: 'Special Items Knit Crew Men2',
            rating: 4.6,
            image: cardImage1,
            canView: false
        },
        {
            name: 'Special Items Knit Crew Men3',
            rating: 4.6,
            image: cardImage1,
            canView: true
        },
        {
            name: 'Special Items Knit Crew Men4',
            rating: 4.6,
            image: cardImage1,
            canView: false
        },
        {
            name: 'Special Items Knit Crew Men5',
            rating: 4.6,
            image: cardImage1,
            canView: true
        },
        {
            name: 'Special Items Knit Crew Men6',
            rating: 4.6,
            image: cardImage1,
            canView: false
        }
    ]

    return (
        <div className={s['page']}>
            <motion.div
                className={s['board']} 
                variants={boardVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={s['board__content']}>
                    <span className={`${s['board__text']} ${s['board__text--title']}`}>MyFashn AI - Твой личный помошник в подборе образа!</span>
                    <span className={`${s['board__text']} ${s['board__text--description']}`}>Найди образ на свой вкус прямо сейчас</span>
                    <Controller
                        name='search'
                        control={control}
                        render={({ field }) => (
                            <div className={s['board__input-container']}>
                                <InputIcon className={s['icon']} />
                                <input
                                    {...field}
                                    type='text'
                                    autoComplete='off'
                                    placeholder='Поиск...'
                                    className={s['board__input']}
                                />
                            </div>
                        )}
                    />
                </div>
            </motion.div>
            <div className={s['page__content']}>
                <span className={`${s['page__text']} ${s['page__text--title']}`}>Каталог вещей</span>
                <Filter control={control} config={filterConfig} setValue={setValue} />
                <div className={s['page__cards-wrapper']}>
                    {cardConfig.map((card) => {
                        return (
                            <CardLook
                                key={card.name}
                                config={card}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}