import { useForm, Controller } from 'react-hook-form'
import { Filter } from '../../components/shared/filter/Filter'
import { FavoriteCard } from '../../components/favoriteCard/FavoriteCard'
import { Footer } from '../../components/footer/Footer'
import s from './FavoritesPage.module.scss'

import cardImage4 from '../../assets/images/card4.png'
import cardImage1 from '../../assets/images/card1.png'
import cardImage2 from '../../assets/images/card2.png'
import cardImage3 from '../../assets/images/card3.png'
/* import cardImage5 from '../../assets/images/card5.png'
import cardImage6 from '../../assets/images/card6.png'
import cardImage7 from '../../assets/images/card7.png'
import cardImage8 from '../../assets/images/card8.png' */

export const FavoritesPage = () => {
    const { control, setValue } = useForm({
        defaultValues: {
            search: '',
            sort: '',
            new: false
        }
    })

    const filterConfig = [
        {
            label: 'Сортировка',
            name: 'sort',
            type: 'dropdown',
            default: 'default',
            items: [
                {
                    label: 'По популярности',
                    value: 'popularity',
                    icon: null
                },
                {
                    label: 'По цене',
                    value: 'price',
                    icon: null
                }
            ]
        },
        {
            label: 'Новое',
            name: 'new',
            type: 'checkbox'
        }
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
        }
    ]

    return (
        <div className={s['page']}>
            <div className={s['page__content']}>
                <span className={`${s['page__text']} ${s['page__text--title']}`}>Избранные образы</span>
                <Filter control={control} config={filterConfig} setValue={setValue} />
                <div className={s['page__cards-wrapper']}>
                    {cardConfig.map((card) => {
                        return (
                            <FavoriteCard
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
