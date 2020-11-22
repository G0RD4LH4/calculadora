function createCalculator() {
    return {
        // Atributos:
        display: document.querySelector('.display'),

        // Metodos:
        start() {
            this.click()
            this.enterPressed()
        },
        click() {
            document.addEventListener('click', event => {
                const el = event.target

                if(el.classList.contains('button-num')) this.buttonToDisplay(el.innerText)
                if(el.classList.contains('button-clear')) this.clearDisplay()
                if(el.classList.contains('button-del')) this.deleteOne()
                if(el.classList.contains('button-eq')) this.calculate()
            })
        },
        enterPressed() {
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13) this.calculate()
            })
        },
        buttonToDisplay(value) {
            this.display.value += value
        },
        clearDisplay() {
            this.display.value = ''
            this.display.focus()
        },
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },
        calculate() {
            let account = this.display.value

            try {
                account = eval(account) // ISSO PODE SER MUITO PERIGOSO ... :D

                if(!account) {
                    alert('Conta inválida')
                    return
                }

                this.display.value = account
            } catch(e) {
                alert('Conta inválida')
                return
            }
        }
    }
}

const calculator = createCalculator()
calculator.start()
