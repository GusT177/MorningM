window.app = new FrameworkNUI("app");
window.app.render(new ExampleComponent());

window.app.addRoute('#/', ExampleComponent)

window.app.start();