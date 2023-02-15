const rangeInput = document.querySelector('.box__range-input');
const priceEl = document.querySelector('.box__price__num');
const viewsEl = document.querySelector('.box__views');

rangeInput.addEventListener('input', function () {
    currentValue = +rangeInput.value;
    document.documentElement.style.setProperty(
        '--current-val',
        `${currentValue}%`
    );

    if (currentValue <= 20) {
        priceEl.textContent = `$8.00`;
        viewsEl.textContent = '50K';
    }

    if (currentValue > 20 && currentValue < 40) {
        priceEl.textContent = `$12.00`;
        viewsEl.textContent = '75K';
    }

    if (currentValue >= 40 && currentValue < 60) {
        priceEl.textContent = `$16.00`;
        viewsEl.textContent = '100K';
    }

    if (currentValue >= 60 && currentValue < 80) {
        priceEl.textContent = `$24.00`;
        viewsEl.textContent = '250K';
    }

    if (currentValue >= 80) {
        priceEl.textContent = `$32.00`;
        viewsEl.textContent = '500K';
    }
});
