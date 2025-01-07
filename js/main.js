document.addEventListener("DOMContentLoaded", function () {
    // Determine the correct path prefix (if in subdirectory)
    let pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "";

    // Load header
    fetch(`${pathPrefix}partials/heading.html`)
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

    // Load footer
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
