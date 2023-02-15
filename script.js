const rangeInput = document.querySelector('.box__range-input');
const priceEl = document.querySelector('.box__price__num');
const viewsEl = document.querySelector('.box__views');

let discountStatus = true;
let views = [50, 75, 100, 250, 500];
let dis20, dis40, dis60, dis80, dis100;

function setStats() {
    dis20 = discountStatus ? [8] : [8 * 0.75];
    dis40 = discountStatus ? [12] : [12 * 0.75];
    dis60 = discountStatus ? [16] : [16 * 0.75];
    dis80 = discountStatus ? [24] : [24 * 0.75];
    dis100 = discountStatus ? [32] : [32 * 0.75];
}
setStats();

rangeInput.addEventListener('input', displayStats);

function displayStats() {
    currentValue = +rangeInput.value;
    document.documentElement.style.setProperty(
        '--current-val',
        `${currentValue}%`
    );

    if (currentValue <= 20) {
        priceEl.textContent = `$${dis20}.00`;
        viewsEl.textContent = `${views[0]}K`;
    }

    if (currentValue > 20 && currentValue < 40) {
        priceEl.textContent = `$${dis40}.00`;
        viewsEl.textContent = `${views[1]}K`;
    }

    if (currentValue >= 40 && currentValue < 60) {
        priceEl.textContent = `$${dis60}.00`;
        viewsEl.textContent = `${views[2]}K`;
    }

    if (currentValue >= 60 && currentValue < 80) {
        priceEl.textContent = `$${dis80}.00`;
        viewsEl.textContent = `${views[3]}K`;
    }

    if (currentValue >= 80) {
        priceEl.textContent = `$${dis100}.00`;
        viewsEl.textContent = `${views[4]}K`;
    }
}
displayStats();

const toggleBoxEl = document.querySelector('.box__toggle');
const toggleCircleEl = document.querySelector('.box__toggle-circle');
const activeCircle = 'box__toggle-circle--active';

toggleBoxEl.addEventListener('click', function () {
    if (!toggleCircleEl.classList.contains(activeCircle)) {
        toggleCircleEl.classList.add(activeCircle);
        toggleBoxEl.classList.add('box__toggle--active');

        discountStatus = false;
        setStats();
        displayStats();
    } else {
        toggleCircleEl.classList.remove(activeCircle);
        toggleBoxEl.classList.remove('box__toggle--active');

        discountStatus = true;
        setStats();
        displayStats();
    }
});
