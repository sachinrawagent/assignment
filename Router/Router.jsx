import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddCity from '../src/Components/AddCity'
import EditCity from '../src/Components/EditCity'

const Router = () => {
  return (
    <div>

<Routes>
<Route  path="/" element={<AddCity />}  />
<Route path="edit" element={<EditCity />} />

</Routes>

    </div>
  )
}

export default Router