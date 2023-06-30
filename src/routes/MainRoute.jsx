import React from 'react'
import { Route, Routes } from 'react-router'
import { Menu } from '../pages/Menu'
import { HomePages } from '../pages/HomePages'
import { Reserva } from '../pages/Reserva'

export const MainRoute = () => {
  const nombreRestaurant = 'C&B'
  return (
    <div className='container'>
        <Routes>
            <Route path='/' element={<HomePages nombre={nombreRestaurant} />}/>
            <Route path='nmenu' element={<Menu/>}/>
            <Route path='reserva'element={<Reserva/>}/>
            
        </Routes>
    </div>
  )
}
