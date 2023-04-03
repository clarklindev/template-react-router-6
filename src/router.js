import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from 'react-router-dom';

// layouts
import { HomeLayout } from './layouts/HomeLayout';

// pages
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';

// Configure nested routes with JSX
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout />}>
      <Route index path='home' element={<Home />} />
      <Route index path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
);
