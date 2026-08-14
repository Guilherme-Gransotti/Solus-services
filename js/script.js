const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email && senha) {
            localStorage.setItem("usuario", email);
            window.location.href = "index.html";
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
}

// Registro do Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker ativo."))
            .catch(err => console.error("Erro no Service Worker:", err));
    });
}