import { createClient } from "@supabase/supabase-js";

if (
  process.env.NEXT_PUBLIC_SUPABASE_URL == undefined ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY == undefined
) {
  throw new Error("Somthing wrong with supabase");
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
