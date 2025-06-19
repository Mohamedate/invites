"use client";
import { insertInvite } from "@/db-actions";

import { useActionState } from "react";

export default function Home() {
  const [state, formAction, isPending] = useActionState(
    insertInvite,
    undefined
  );

  return (
    <div className="container">
      <div className="background-container"></div>
      <div className="rsvp-card">
        <img src="geosa-15.svg" alt="GEOSA Logo" className="logo" />
        <h2>
          {" "}
          حفــــــــــــــــل تدشيــــــــــــن <br />
          تراخيــــــــص الأنشطــــــــة والتصـــاريــــح الجيومكانيــــــة
        </h2>
        <p className="english-title">
          Inauguration Ceremony of
          <br />
          the Geospatial Activities and Permits Licensing
        </p>
        {!state?.message && (
          <p className="rsvp-text">
            <span className="rsvp-arabic">Tap To RSVP - لتأكيد حضورك</span>
          </p>
        )}
        {state?.message ? (
          <div className="text-white mt-8">
            <p className="text-4xl mb-3">شكرا لكم</p>
            {state?.ok && <p className="text-[15px]">{state.message}</p>}
            {!state?.ok && <p className="text-[12px]">{state.message}</p>}
          </div>
        ) : (
          <form action={formAction}>
            <input
              type="text"
              name="name"
              className="name-input"
              placeholder="أكتب اسمك هنا"
              required
            />

            <div className="button-container">
              <button
                className="btn btn-decline"
                type="submit"
                name="status"
                value="decline"
                disabled={isPending}
              >
                Decline - اعتذار
              </button>
              <button
                className="btn btn-confirm"
                type="submit"
                name="status"
                value="confirm"
                disabled={isPending}
              >
                Confirm - تأكيد
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
