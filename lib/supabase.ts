import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export interface PersonalWork {
  id: string
  title: string
  description: string
  image_url: string
  grid_position: string
  created_at: string
  updated_at: string
}
