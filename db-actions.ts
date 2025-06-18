import { supabase } from "./supabase";

export async function insertInvite(name: string, is_accepted: boolean) {
  const { data, error } = await supabase
    .from("invites")
    .insert([{ name, is_accepted }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
