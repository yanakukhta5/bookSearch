import { FC } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import { Layout } from '@/layout'
import { Home, Book } from '@/pages'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="book/:id" element={<Book />} />
    </Route>
  )
)

export const App: FC = function () {
  return <RouterProvider router={router} />
}
