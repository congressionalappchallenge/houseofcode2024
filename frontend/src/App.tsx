import { Button, MantineProvider, Text, createTheme } from '@mantine/core'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Layout } from './components/Layout'

const queryClient = new QueryClient()

const theme = createTheme({
  colors: {
    navy: ['#eef4fb', '#dce5f1', '#b4c8e4', '#8aa9d9', '#678fcf', '#517fc9', '#4576c7', '#3765b1', '#2e5a9e', '#214d8c'],
    'dark-red': ['#ffebed', '#f9d7d9', '#ecaeb1', '#e18286', '#d75d62', '#d2454b', '#d0383f', '#b82a31', '#a6232a', '#921822']
  },
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'navy'
})

export default function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} classNamesPrefix="CAC">
        <Layout />
      </MantineProvider>
    </QueryClientProvider>
  )
}
