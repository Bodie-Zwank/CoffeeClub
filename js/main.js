document.addEventListener("DOMContentLoaded", function () {
    let pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "";

    // Load Header
    fetch(`${pathPrefix}partials/header.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching header:", error);
        });

    // Load Footer
    fetch(`${pathPrefix}partials/footer.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => {
            console.error("Error fetching footer:", error);
        });
});
