import React from 'react'
import { Main } from '../components'
import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'


const supabase = createClient(
  process.env.GATSBY_SUPABASE_HOST,
  process.env.GATSBY_SUPABASE_KEY
)
export function SupabaseProvider({ children }) {
  return <Provider value={supabase}>{children}</Provider>
}


const App = () => (
  <Provider value={supabase}>
    <Main />
  </Provider>
)

export default App
