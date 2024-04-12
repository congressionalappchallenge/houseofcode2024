import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { MantineProvider, createTheme } from '@mantine/core'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import App from './App.tsx'
import Map from './components/Map.tsx';
import './index.css'

const queryClient = new QueryClient()

const theme = createTheme({
  colors: {
    navy: ['#eef4fb', '#dce5f1', '#b4c8e4', '#8aa9d9', '#678fcf', '#517fc9', '#4576c7', '#3765b1', '#2e5a9e', '#214d8c'],
    'dark-red': ['#ffebed', '#f9d7d9', '#ecaeb1', '#e18286', '#d75d62', '#d2454b', '#d0383f', '#b82a31', '#a6232a', '#921822']
  },
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'navy'
});

const router = createBrowserRouter([
  {
    path: "/map",
    element: <Map />
  },
  {
    path: "/",
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} classNamesPrefix="CAC">
    <RouterProvider router={router} />
    </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
