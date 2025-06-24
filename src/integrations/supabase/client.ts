
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

const supabaseUrl = 'https://jdsglqxdiftrfkiqityj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkc2dscXhkaWZ0cmZraXFpdHlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMTU5MDUsImV4cCI6MjA2NTU5MTkwNX0.U1T5R53ioJBUGFwzFkQsG7QGUu_zvPh0SSWaDr4y1Nk'

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  }
)
