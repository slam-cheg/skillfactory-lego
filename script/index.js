const container = document.querySelector(".page-wrapper");
const accordionsWrapper = container.querySelector(".accordions-wrapper");
const buttons = container.querySelectorAll(".buttons__element");
const accordions = container.querySelectorAll(".accordion");
const accordionsHeaders = container.querySelectorAll(".accordion-item__header");
const dropdown = container.querySelector(".dropdown");
const dropdownValue = dropdown.querySelector(".dropdown__value");
const dropdownBtns = container.querySelectorAll(".dropdown__list-item");

dropdown.addEventListener("click", toggleDropdown);

dropdownBtns.forEach((btn) => {
	
	btn.addEventListener("click", () => {
		accordions.forEach((accordion) => {
			accordion.classList.remove("accordion_active");
		});
		accordions.forEach((accordion) => {
			if (accordion.id === btn.id) {
				accordion.classList.add("accordion_active");
			}
		});
		dropdownValue.textContent = btn.textContent;
		toggleDropdown();
	});
});

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		buttons.forEach((button) => {
			button.classList.remove("buttons__element_active");
		});
		buttons.forEach((button) => {
			if (button.id === btn.id) {
				button.classList.add("buttons__element_active");
			}
		});
		accordions.forEach((accordion) => {
			accordion.classList.remove("accordion_active");
		});
		accordions.forEach((accordion) => {
			if (accordion.id === btn.id) {
				accordion.classList.add("accordion_active");
			}
		});
	});
});

accordionsHeaders.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.parentElement.classList.toggle("accordion-item_opened");
	});
});

function toggleDropdown() {
	dropdown.classList.toggle("dropdown_opened");
}
