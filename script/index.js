const container = document.querySelector(".page-wrapper");
const accordionsWrapper = container.querySelector(".accordions-wrapper");
const buttons = container.querySelectorAll(".buttons__element");
const accordions = container.querySelectorAll(".accordion");
const plusButtons = container.querySelectorAll(".accordion-item__plus");
const checkBoxes = container.querySelectorAll(".accordion-item__checkbox");

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

plusButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.parentElement.parentElement.classList.toggle("accordion-item_opened");
	});
});

checkBoxes.forEach((chkBox) => {
	chkBox.addEventListener("click", () => {
		chkBox.classList.toggle("accordion-item__checkbox_checked");
	});
});
