"use server";
import { supabase } from "./supabase";

export async function insertInvite(state, formData: FormData) {
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
  if (status == "confirm") {
    return { message: "لقد تم تأكيد حضوركم", ok: true };
  } else {
    return { message: "نلتقيكم في مناسبات قادمة", ok: false };
  }
}

export async function getInvites() {
  const { data, error } = await supabase.from("invites").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
