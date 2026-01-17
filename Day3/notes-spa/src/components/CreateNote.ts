import { addNote } from "../store";
import { navigate } from "../router";

export function CreateNote(): HTMLElement {
  const form = document.createElement("form");

  let title = "";
  let content = "";

  form.innerHTML = `
    <input placeholder="Title" required />
    <textarea placeholder="Content" required></textarea>
    <button>Create Note</button>
  `;

  const [titleInput, contentInput] = form.querySelectorAll("input, textarea");

  titleInput.addEventListener("input", e => {
    title = (e.target as HTMLInputElement).value;
  });

  contentInput.addEventListener("input", e => {
    content = (e.target as HTMLTextAreaElement).value;
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    addNote(title, content);
    navigate("/");
  });

  return form;
}
