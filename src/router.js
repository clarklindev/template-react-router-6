import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from 'react-router-dom';

// layouts
import { HomeLayout } from './layouts/HomeLayout';
import { HelpLayout } from './layouts/HelpLayout';

// pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Contact } from './pages/help/Contact';
import { Faq } from './pages/help/Faq';
// Configure nested routes with JSX
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
);
