import { useForm, Controller } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Filter } from '../../components/shared/filter/Filter'
import { CardLook } from '../../components/cardLook/CardLook'
import { Footer } from '../../components/footer/Footer'
import s from './HomePage.module.scss'

import { ReactComponent as InputIcon } from '../../assets/icons/search.svg'

import cardImage1 from '../../assets/images/card1.png'
import cardImage2 from '../../assets/images/card2.png'
import cardImage3 from '../../assets/images/card3.png'
import cardImage4 from '../../assets/images/card4.png'
import cardImage5 from '../../assets/images/card5.png'
import cardImage6 from '../../assets/images/card6.png'
import cardImage7 from '../../assets/images/card7.png'
import cardImage8 from '../../assets/images/card8.png'

export const HomePage = () => {
    const { control, setValue } = useForm({
        defaultValues: {
            search: '',
            sort: '',
            gender: '',
            season: '',
            rating: '',
            color: '',
            style: '',
            popular: false
        }
    })

    const boardVariants = {
        hidden: {
            y: -50,
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
        label: 'Сортировка',
        name: 'sort',
        type: 'dropdown',
        default: 'date',
        items: [
            {
                label: 'По дате (новые)',
                value: 'date_new',
                icon: null
            },
            {
                label: 'По дате (старые)',
                value: 'date_old',
                icon: null
            },
            {
                label: 'По рейтингу (высокий)',
                value: 'rating_high',
                icon: null
            },
            {
                label: 'По рейтингу (низкий)',
                value: 'rating_low',
                icon: null
            }
        ]
    },
    {
        label: 'Гендер',
        name: 'gender',
        type: 'dropdown',
        default: 'all',
        items: [
            {
                label: 'Мужской',
                value: 'male',
                icon: null
            },
            {
                label: 'Женский',
                value: 'female',
                icon: null
            },
            {
                label: 'Унисекс',
                value: 'unisex',
                icon: null
            }
        ]
    },
    {
        label: 'Сезон',
        name: 'season',
        type: 'dropdown',
        default: 'all',
        items: [
            {
                label: 'Весна',
                value: 'spring',
                icon: null
            },
            {
                label: 'Лето',
                value: 'summer',
                icon: null
            },
            {
                label: 'Осень',
                value: 'autumn',
                icon: null
            },
            {
                label: 'Зима',
                value: 'winter',
                icon: null
            }
        ]
    },
    {
        label: 'Рейтинг',
        name: 'rating',
        type: 'dropdown',
        default: 'all',
        items: [
            {
                label: 'Популярные',
                value: '5',
                icon: null
            },
            {
                label: 'Не популярные',
                value: '4',
                icon: null
            }
        ]
    },
    {
        label: 'Цвет',
        name: 'color',
        type: 'dropdown',
        default: 'all',
        items: [
            {
                label: 'Черный',
                value: 'black',
                icon: null
            },
            {
                label: 'Белый',
                value: 'white',
                icon: null
            },
            {
                label: 'Красный',
                value: 'red',
                icon: null
            },
            {
                label: 'Синий',
                value: 'blue',
                icon: null
            },
            {
                label: 'Зеленый',
                value: 'green',
                icon: null
            },
            {
                label: 'Желтый',
                value: 'yellow',
                icon: null
            },
            {
                label: 'Розовый',
                value: 'pink',
                icon: null
            },
            {
                label: 'Фиолетовый',
                value: 'purple',
                icon: null
            }
        ]
    },
    {
        label: 'Стиль',
        name: 'style',
        type: 'dropdown',
        default: 'all',
        items: [
            {
                label: 'Повседневный',
                value: 'casual',
                icon: null
            },
            {
                label: 'Деловой',
                value: 'business',
                icon: null
            },
            {
                label: 'Спортивный',
                value: 'sport',
                icon: null
            },
            {
                label: 'Вечерний',
                value: 'evening',
                icon: null
            },
            {
                label: 'Уличный',
                value: 'street',
                icon: null
            },
            {
                label: 'Классический',
                value: 'classic',
                icon: null
            },
            {
                label: 'Романтический',
                value: 'romantic',
                icon: null
            }
        ]
    },
        {
        label: 'Популярное',
        name: 'popular',
        type: 'checkbox'
    },
]

    const cardConfig = [
        {
            name: 'Web.',
            rating: 5,
            image: cardImage1,
            canView: false
        },
        {
            name: 'Fairy',
            rating: 5,
            image: cardImage2,
            canView: false
        },
        {
            name: 'Loading...',
            rating: 5,
            image: cardImage3,
            canView: true
        },
        {
            name: 'Brownie',
            rating: 5,
            image: cardImage4,
            canView: false
        },
        {
            name: 'Choose your character',
            rating: 5,
            image: cardImage5,
            canView: true
        },
        {
            name: 'Pear',
            rating: 5,
            image: cardImage6,
            canView: false
        },
        {
            name: 'Gengar',
            rating: 5,
            image: cardImage7,
            canView: true
        },
        {
            name: 'Discrete',
            rating: 5,
            image: cardImage8,
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
                <span className={`${s['page__text']} ${s['page__text--title']}`}>Каталог образов</span>
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
