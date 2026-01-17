import { notes } from "../store";
import { NoteItem } from "./NoteItem";

export function NoteList(): HTMLElement {
  const container = document.createElement("div");

  if (notes.length === 0) {
    container.textContent = "No notes yet.";
    return container;
  }

  notes.forEach(note => {
    container.appendChild(NoteItem(note));
  });

  return container;
}
