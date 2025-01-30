function afficherDetails() {
    let details = document.getElementById("details");
    
    if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
    } else {
        details.classList.add("hidden");
    }
}
