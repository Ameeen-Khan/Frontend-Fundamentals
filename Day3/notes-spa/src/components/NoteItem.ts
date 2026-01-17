import type { Note } from "../types";

export function NoteItem(note: Note): HTMLElement {
  const div = document.createElement("div");
  div.className = "note-item";

  div.innerHTML = `
    <h3>${note.title}</h3>
    <small>${note.createdAt.toLocaleString()}</small>
  `;

  return div;
}
