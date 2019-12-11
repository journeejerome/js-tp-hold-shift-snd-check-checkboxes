(function () {
    const CheckBox = {
        cacheDom(){
            this.lastChecked;
            document.documentElement.className = "js-enabled";
        },
        addEventListener(){
            this.checkBox = document.querySelectorAll('.inbox input[type="checkbox"]');
            console.log(this.checkBox);
            for(const element of this.checkBox){
                element.addEventListener('click', ()=>{
                    this.shift(event);
                });
            }
        },
        init(){
            this.cacheDom();
            this.addEventListener()
        },
        shift(event){
            console.log(this.lastChecked);
            this.inBetween = false;
            if(event.shiftKey && event.currentTarget.checked){
                for(const element of this.checkBox){
                    if(element === event.currentTarget || element === this.lastChecked){
                        console.log("test");
                        this.inBetween = !this.inBetween;
                    }
                    if(this.inBetween){
                        element.checked = true;
                    }
                }
            }
            console.log(event.currentTarget);

            this.lastChecked = event.currentTarget;
        }
    };
    CheckBox.init();
})();











/*document.documentElement.className = "js-enabled";

const checkBox = document.querySelectorAll('.inbox input[type="checkbox"]');

for(const element of checkBox) {
    element.addEventListener('click', shift);
}

let lastChecked;

function shift(event) {
    let inBetween = false;
    console.log(this);
    if(event.shiftKey && this.checked){
        for(const element of checkBox){
            if(element === this || element === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                element.checked = true;
            }
        }
    }
    lastChecked = this;
}*/
