// const { value: password } = await Swal.fire({
//     title: 'Enter your password',
//     input: 'password',
//     inputLabel: 'Password',
//     inputPlaceholder: 'Enter your password',
//     inputAttributes: {
//       maxlength: 10,
//       autocapitalize: 'off',
//       autocorrect: 'off'
//     }
//   })
  
//   if (password) {
//     Swal.fire(`Entered password: ${password}`)
//   }
  var loader = document.getElementById("preloader");
  window.addEventListener("load",function(){
    loader.style.display="none";
  })