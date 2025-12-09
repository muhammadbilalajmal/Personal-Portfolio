/* --------------- MOBILE NAV --------------- */
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
	nav.classList.toggle("open");
	toggle.classList.toggle("open");
});

/* close nav when link clicked */
document.querySelectorAll(".nav_link").forEach((link) =>
	link.addEventListener("clik", () => {
		nav.classList.remove("open");
		toggle.classList.remove("open");
	})
);

/* --------------- SCROLL-SPY --------------- */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_link");

window.addEventListener("scroll", () => {
	let cur = "";
	sections.forEach((sec) => {
		const secTop = sec.offsetTop;
		const secHeight = sec.clientHeight;
		if (scrollY >= secTop - 100) cur = sec.getAttribute("id");
	});

	navLinks.forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href").slice(1) === cur) link.classList.add("active");
	});
});

/* --------------- FADE-UP ON SCROLL --------------- */
const faders = document.querySelectorAll(".fade-up");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) return;
		entry.target.classList.add("visible");
		observer.unobserve(entry.target);
	});
}, appearOptions);

faders.forEach((el) => appearOnScroll.observe(el));

/* --------------- PROJECT FILTER --------------- */
const filterBtns = document.querySelectorAll(".filter_btn");
const projects = document.querySelectorAll(".project");

filterBtns.forEach((btn) =>
	btn.addEventListener("click", () => {
		const val = btn.dataset.filter;
		filterBtns.forEach((b) => b.classList.remove("active"));
		btn.classList.add("active");

		projects.forEach((proj) => {
			if (val === "all" || proj.dataset.category === val) {
				proj.classList.remove("hidden");
			} else {
				proj.classList.add("hidden");
			}
		});
	})
);

/* --------------- CONTACT FORM --------------- */
const form = document.getElementById("contactForm");
const status = document.querySelector(".form_status");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	status.textContent = "Sending…";

	/* fake delay for demo */
	setTimeout(() => {
		status.textContent = "Message sent! 🎉";
		form.reset();
	}, 800);
});

/* --------------- DYNAMIC YEAR --------------- */
document.getElementById("year").textContent = new Date().getFullYear();