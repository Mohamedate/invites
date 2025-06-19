import { getInvites } from "@/db-actions";
import React from "react";
import InviteList from "../InviteList";

export default async function page() {
  const invites = await getInvites();

  return (
    <div>
      <div className="background-container"></div>
      <InviteList invites={invites} />
    </div>
  );
}
