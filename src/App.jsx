import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { HomePage } from './pages/homePage/HomePage'
import { ItemsPage } from './pages/itemsPage/ItemsPage'
import { WardrobePage } from './pages/wardrobePage/WardrobePage'
import { FavoritesPage } from './pages/favoritesPage/FavoritesPage'
import { ProfilePage } from './pages/profilePage/ProfilePage'

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path='/items' element={<ItemsPage />} />
        <Route path='/wardrobe' element={<WardrobePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}
