document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener("click", function() {
            options.forEach(o => o.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});
