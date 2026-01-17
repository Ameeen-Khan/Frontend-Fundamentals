import { NoteList } from "./components/NoteList";
import { CreateNote } from "./components/CreateNote";

const routes: Record<string, () => HTMLElement> = {
  "/": NoteList,
  "/create": CreateNote,
};

export function navigate(path: string) {
  history.pushState({}, "", path);
  render();
}

export function render() {
  const app = document.getElementById("app")!;
  app.innerHTML = "";

  const route = routes[location.pathname];
  app.appendChild(route ? route() : document.createTextNode("404"));
}

window.addEventListener("popstate", render);
