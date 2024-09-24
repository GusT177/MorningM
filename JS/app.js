import { Framework } from "./framework/core";
import { ExampleComponent } from "../component/ExampleMorning";

window.app = new Framework("app");
window.app.render(new ExampleComponent());

window.app.addRoute('#/', ExampleComponent)

window.app.start();