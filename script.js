document.addEventListener("keyup", e=>{

    if(e.key === "Escape")e.target.value = ""
    
  if(e.target.matches("#buscador")){

   document.querySelectorAll(".card").forEach(elemento =>{

    elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    ?elemento.classList.remove("filtro")
    :elemento.classList.add("filtro")

   })

  }

})