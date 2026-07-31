function searchGlossary() {
    const search = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    if (search === "html") {
        window.location.href="html.html";
    }

    else if (search === "css") {
        window.location.href="css.html";
    }

    else if (search === "javascript") {
        window.location.href="javascript.html";
    }

    else if (search === "api") {
        window.location.href="api.html";
    }

    else if (search === "rest") {
        window.location.href="rest.html";
    }

    else{
        alert("Begriff nicht gefunden. Bitte versuchen Sie es erneut.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("searchInput");

    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchGlossary();
            }
        });
    }   
});

document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModified = new Date(document.lastModified);
        const datum = lastModified.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const uhrzeit = lastModified.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit'
        });

        lastModifiedElement.textContent = "Letzte Änderung: " + datum + " um " + uhrzeit + " Uhr ";
    }
});