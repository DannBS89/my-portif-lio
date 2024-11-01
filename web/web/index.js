function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "logo.jpeg")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "logo.jpeg")
    }
  }

  function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
  
    // pegar a tag img
    const img = document.querySelector("#profile img")
  
    // substituir a imagem
    if (html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute("src", "./assets/logo.jpeg")
    } else {
      // set tiver sem light mode, manter a imagem normal
      img.setAttribute("src", "./img/logo.jpeg")
    }
  }