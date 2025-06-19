import { insertInvite } from "@/db-actions";
import { redirect } from "next/navigation";

export default function Home() {
  async function handleSubmit(formData: FormData) {
    "use server";
    await insertInvite(formData);
    redirect("/thanks");
  }
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
        <p className="rsvp-text">
          <span className="rsvp-arabic">Tap To RSVP - لتأكيد حضورك</span>
        </p>
        <form action={handleSubmit}>
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
            >
              Decline - اعتذار
            </button>
            <button
              className="btn btn-confirm"
              type="submit"
              name="status"
              value="confirm"
            >
              Confirm - تأكيد
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
