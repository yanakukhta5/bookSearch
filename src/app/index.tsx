import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from '@/layout'
import { Home, Book } from '@/pages'

export const App: FC = function () {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book/:id" element={<Book />} />
      </Route>
    </Routes>
  )
}

export default App
