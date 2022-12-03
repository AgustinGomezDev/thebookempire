const form = document.querySelector('#form')
const submitPurchase = document.querySelector('#submit-purchase');
const inputs = document.querySelectorAll('.form-control');

// Prevent reload
form.addEventListener('click', (e) => {
    e.preventDefault();
})

// Swal
submitPurchase.addEventListener('click', () =>{
    inputs.forEach((input) => {
        if(input.value!=""){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, purchase it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear();
                    Swal.fire({
                        title: 'Your cart has been purchased!',
                        icon: 'success',
                        showConfirmButton: false,
                        html: '<a href="../index.html" class="swal2-confirm swal2-styled" style="display: inline-block;">OK</a>'
                    }
                    )
                }
              })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to fill in the all the required fields.',
              })
        }
    })
});