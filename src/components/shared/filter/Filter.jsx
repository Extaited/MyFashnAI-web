import { useState, useEffect, useRef } from 'react'
import { Controller } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import s from './Filter.module.scss'

import { ReactComponent as DropdownIcon } from '../../../assets/icons/chevron-down.svg'
import { ToggleIcon } from '../toggleIcon/ToggleIcon'
import { ReactComponent as ClearIcon } from '../../../assets/icons/filter.svg'

const animationConfig = {
    duration: 0.27,
    type: 'spring',
    delayStep: 0.06
}

const variants = {
    hide: {
        y: -15,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1
    }
}

export const Filter = ({ config, control, setValue }) => {
    const [dropdownStates, setDropdownStates] = useState(() =>
        config.reduce((acc, filter) => {
            if (filter.type === 'dropdown') {
                acc[filter.name] = false
            }
            return acc
        }, {})
    )

    const dropdownRefs = useRef({})

    const toggleDropdown = (name) => {
        setDropdownStates((prev) => ({
            ...Object.keys(prev).reduce((acc, key) => {
                acc[key] = key === name ? !prev[key] : false
                return acc
            }, {}),
            [name]: !prev[name]
        }))
    }

    const closeAllDropdowns = () => {
        setDropdownStates((prev) =>
            Object.keys(prev).reduce((acc, key) => {
                acc[key] = false
                return acc
            }, {})
        )
    }
    
    const clearAllFilters = () => {
        config.forEach((filter) => {
            if (filter.type === 'dropdown') {
                setValue(filter.name, '')
            } else if (filter.type === 'checkbox') {
                setValue(filter.name, false)
            }
        })
        closeAllDropdowns()
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            let clickedOutside = true
            Object.values(dropdownRefs.current).forEach((ref) => {
                if (ref && ref.contains(event.target)) {
                    clickedOutside = false
                }
            })
            if (clickedOutside) {
                closeAllDropdowns()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div className={s['filter']}>
            <div className={s['filter__container']}>
                {config.map((filter) => {
                    if (filter.type === 'dropdown') {
                        const resetItem = {
                            label: 'Сбросить',
                            value: null,
                            icon: null
                        }
                        const dropdownItems = [...filter.items, resetItem]

                        return (
                            <Controller
                                key={filter.name}
                                name={filter.name}
                                control={control}
                                render={({ field: { value, onChange } }) => {
                                    const selectedItem = filter.items.find((item) => item.value === value)
                                    const displayLabel = selectedItem ? selectedItem.label : filter.label

                                    return (
                                        <div
                                            className={s['filter__dropdown']}
                                            ref={(el) => (dropdownRefs.current[filter.name] = el)}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleDropdown(filter.name)}
                                                className={`${s['filter__dropdown-button']} ${dropdownStates[filter.name] ? s['filter__dropdown-button--open'] : ''} ${value ? s['filter__dropdown-button--active'] : '' }`}
                                            >
                                                {displayLabel}
                                                <AnimatePresence mode='wait'>
                                                    <motion.div
                                                        initial={dropdownStates[filter.name] ? { rotate: 0 } : { rotate: 180 }}
                                                        animate={dropdownStates[filter.name] ? { rotate: 180 } : { rotate: 0 }}
                                                        exit={dropdownStates[filter.name] ? { rotate: 0 } : { rotate: 180 }}
                                                        transition={{
                                                            duration: 0.27,
                                                            type: 'tween'
                                                        }}
                                                        className={s['icon__box']}
                                                    >
                                                        <DropdownIcon className={s['icon']} />
                                                    </motion.div>
                                                </AnimatePresence>
                                            </button>
                                            <AnimatePresence mode="wait">
                                                {dropdownStates[filter.name] && (
                                                    <ul
                                                        className={s['filter__dropdown-list']}
                                                    >
                                                        {dropdownItems.map((item, index) => (
                                                            <motion.li
                                                                key={item.label}
                                                                className={s['filter__dropdown-item']}
                                                                variants={variants}
                                                                initial="hide"
                                                                animate="show"
                                                                exit="hide"
                                                                transition={{
                                                                    duration: animationConfig.duration,
                                                                    type: animationConfig.type,
                                                                    delay: index * animationConfig.delayStep
                                                                }}
                                                                onClick={() => {
                                                                    if (item.value === null) {
                                                                        onChange('')
                                                                    } else {
                                                                        onChange(item.value)
                                                                    }
                                                                    toggleDropdown(filter.name)
                                                                }}
                                                            >
                                                                {item.icon && <item.icon className={s['icon']} />}
                                                                <span className={s['filter__dropdown-text']}>{item.label}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                }}
                            />
                        )
                    }

                    if (filter.type === 'checkbox') {
                        return (
                            <Controller
                                key={filter.name}
                                name={filter.name}
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <button
                                        type="button"
                                        onClick={() => onChange(!value)}
                                        className={`${s['toggle-button']} ${value ? s['toggle-button--active'] : ''}`}
                                        aria-pressed={value}
                                        aria-label={filter.label}
                                    >
                                        {filter.label}
                                        <ToggleIcon checked={value} />
                                    </button>
                                )}
                            />
                        )
                    }

                    return null
                })}
            </div>
            <button
                onClick={clearAllFilters}
                className={s['filter__clear-button']}
            >
                Очистить
                <ClearIcon className={s['icon']} />
            </button>
        </div>
    )
}
