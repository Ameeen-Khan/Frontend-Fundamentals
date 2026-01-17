import { navigate, render } from "./router";

document.body.innerHTML = `
  <nav>
    <button id="home">Home</button>
    <button id="create">Create</button>
  </nav>
  <div id="app"></div>
`;

document.getElementById("home")!.onclick = () => navigate("/");
document.getElementById("create")!.onclick = () => navigate("/create");

render();
