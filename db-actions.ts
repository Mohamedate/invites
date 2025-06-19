"use server";
import { supabase } from "./supabase";

export async function insertInvite(formData: FormData) {
  const name = formData.get("name");
  const status = formData.get("status");

  const is_accepted = status === "confirm" ? true : false;
  const { data, error } = await supabase
    .from("invites")
    .insert([{ name, is_accepted }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getInvites() {
  const { data, error } = await supabase
    .from("invites")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
