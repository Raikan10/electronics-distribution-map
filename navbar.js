document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
    <header>
        <h1>Electronics Distribution Process</h1>
        <nav>
            <a href="index.html" id="link-index">Home</a>
            <a href="procurement.html" id="link-procurement">Procurement</a>
            <a href="inventory.html" id="link-inventory">Inventory</a>
            <a href="sales.html" id="link-sales">Sales</a>
            <a href="fulfillment.html" id="link-fulfillment">Fulfillment</a>
            <a href="finance.html" id="link-finance">Finance</a>
        </nav>
    </header>
    `;

    // Inject the navbar
    document.getElementById("navbar-placeholder").innerHTML = navHTML;

    // Highlight the active link
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";
    
    // Remove .html for cleaner mapping if needed, but simple matching works
    if (page.includes("index")) document.getElementById("link-index").classList.add("active");
    else if (page.includes("procurement")) document.getElementById("link-procurement").classList.add("active");
    else if (page.includes("inventory")) document.getElementById("link-inventory").classList.add("active");
    else if (page.includes("sales")) document.getElementById("link-sales").classList.add("active");
    else if (page.includes("fulfillment")) document.getElementById("link-fulfillment").classList.add("active");
    else if (page.includes("finance")) document.getElementById("link-finance").classList.add("active");
});
