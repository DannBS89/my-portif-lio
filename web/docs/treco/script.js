document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    document.getElementById("resultado").textContent = `Nome: ${nome}, Email: ${email}`;
});

