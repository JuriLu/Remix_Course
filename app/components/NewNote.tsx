import { Form, useTransition as useNavigation } from "@remix-run/react";
import styles from "./NewNote.css";

export default function NewNote() {
  const navigation = useNavigation();

  const isSubmitting: boolean = navigation.state === "submitting";

  return (
    //* action ==> defines a path to which this post request should be sent when the form is submitted (Which here is may not be needed because anyways we are at that url when we open this component)
    <Form id="note-form" method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows={5} required />
      </p>
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Note"}
        </button>
      </div>
    </Form>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

/*
 !  Form (instead of form) make a backend request, but it doesn't refresh the page, so the application
 !  stays SPA
*/
