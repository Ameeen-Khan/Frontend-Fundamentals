import type { Note } from "./types";

export const notes: Note[] = [];

export function addNote(title: string, content: string) {
  notes.push({
    id: Date.now(),
    title,
    content,
    createdAt: new Date(),
  });
}
