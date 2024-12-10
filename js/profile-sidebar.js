const profileIcon = document.getElementById("profile-icon");
const sidebar = document.getElementById("profile-sidebar");

// Toggle Sidebar on Profile Icon Click
profileIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
