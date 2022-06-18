const ham = document.querySelector(".hamburguer-menu#hamburguer");
ham.addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('showed')
});
const submenu = document.getElementById("sub-menu")
submenu.addEventListener('click', () =>{
  document.querySelector('.submenu').classList.toggle("showed")
})