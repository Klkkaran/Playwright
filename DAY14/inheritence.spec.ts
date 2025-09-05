class WebComponent{
    selector : any
    constructor(selector: any){
        this.selector=selector
    }
    click(){
        console.log(`Clicking on component with selector: ${this.selector}`)
    }
    focus(){
        console.log(`focusing on the component ${this.selector}`)

    }
}

class Button extends WebComponent{

    click(): void { //override
        super.click() //call parent method
        console.log(`overide the click method`)
    }
}

class TextInput extends WebComponent{
    value : string = " "
    enterText(name:string){
        this.value=name
        console.log(this.value)
    }

}

function testComponents(){
    const login = new Button("#Login")   
    const tex = new TextInput("#Username")
    tex.focus()
    tex.enterText("Karan")
    login.click()
}
testComponents()
