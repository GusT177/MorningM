export class Framework {

     constructor(rootID) {
        this.root = document.getElementById(rootID);
        this.router = new Router();
        window.addEventListener('message', (e) => {
            const data = e.data;
            if (data.type === 'open'){
                this.open()
            } else if(data.type === 'close'){
                this.close()
            }
        })
    }

    render(Component){
        this.root.innerHTML = Component.render();
        if (Component.afterRender()) {
            Component.afterRender();
        }
    }

     open() {
        this.root.style.display = 'flex';
    }

    close(){
        this.root.style.display = 'none';
    }

    start(){
        this.router.init()
    }
}
