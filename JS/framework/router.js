
class Router {
    constructor(){
        this.routes = {};
        window.onhashchange = this.handleRouteChange.bind(this);
    }

    addRoute(route, Component){
        this.routes[route] = Component;
    }

    handleRouteChange(){
        const hash = window.location.hash || '#/';
        const ComponentClass = this.routes[hash];
        if (ComponentClass && window.app) {
            const ComponentInstance = new ComponentClass();
            window.app.render(ComponentInstance);
        }
    }

    navigate(route){
        window.location.hash = route;
    }

    init(){
        this.handleRouteChange();
    }

}