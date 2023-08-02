import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { getSupabaseUrl, getSupabaseKey } from '@supabase/url'

let supabase: SupabaseClient

if (import.meta.env.VITE_SSR) {
  supabase = createClient(getSupabaseUrl(), getSupabaseKey())
} else {
  supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY, {
    localStorage: window.localStorage,
    persistSession: true,
  })
}

export { supabase }
