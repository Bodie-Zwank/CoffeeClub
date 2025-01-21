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

document.addEventListener("DOMContentLoaded", function () {
    // Check if the current page is `index.html`
    const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
    let pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "";

    // Fetch and load the header
    fetch(`${pathPrefix}partials/header.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text();
        })
        .then(data => {
            // Insert the header into the DOM
            const headerContainer = document.getElementById("header");
            headerContainer.innerHTML = data;

            // Adjust <img> `src` attributes in the header only
            const images = headerContainer.querySelectorAll("img");
            images.forEach(img => {
                const src = img.getAttribute("src");
                if (src) {
                    if (isIndexPage) {
                        img.src = src.replace("../", "");
                    } else {
                        if (!src.startsWith("../")) {
                            img.src = `../${src}`;
                        }
                    }
                }
            });

            // Adjust <a> `href` attributes in the header only
            const links = headerContainer.querySelectorAll("a");
            links.forEach(link => {
                const href = link.getAttribute("href");
                if (href && (href.endsWith("index.html") || href === "index.html")) {
                    if (isIndexPage) {
                        link.href = "index.html";
                    } else {
                        link.href = "../index.html";
                    }
                }
            });
        })
        .catch(error => {
            console.error("Error fetching header:", error);
        });
});
