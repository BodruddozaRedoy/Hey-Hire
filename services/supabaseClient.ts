import { createClient } from "@supabase/supabase-js";


const supabaseUrl="https://wtppxjfivzxbpoceshyt.supabase.co"
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cHB4amZpdnp4YnBvY2VzaHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3OTc0MjYsImV4cCI6MjA2MDM3MzQyNn0.Q3ZHM5rc15UbNyHR5fKpsV4RjLLq7-KRqikmAeZSQNM"
export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
)