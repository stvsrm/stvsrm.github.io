const navPrimary = document.querySelector(".primary-nav-ul");
const navToggle = document.querySelector(".nav-mobile-toggle")

navToggle.addEventListener("click", () => {
	const visibility = navPrimary.getAttribute("data-visible");

	if(visibility === "false") {
		navPrimary.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	}
	else {
		navPrimary.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	}
})