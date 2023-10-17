const $form = document.getElementById('form-contacto');

$form.addEventListener('submit',handleSubmit)

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })

    if(response.ok){
        //limpio los campos del formulario
        this.reset();
        alert('Gracias por contactarnos. ')
    }
    
}