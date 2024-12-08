document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const searchTypeInputs = document.querySelectorAll('input[name="searchType"]');
    const referenceInput = document.getElementById('referenceInput');
    const idInput = document.getElementById('idInput');
    const referenceNumber = document.getElementById('referenceNumber');
    const customerId = document.getElementById('customerId');
    const billType = document.getElementById('billType');
    const searchBtn = document.getElementById('searchBtn');
    const referenceError = document.getElementById('referenceError');
    const idError = document.getElementById('idError');

    // Toggle search type
    searchTypeInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value === 'reference') {
                referenceInput.classList.remove('hidden');
                idInput.classList.add('hidden');
            } else {
                referenceInput.classList.add('hidden');
                idInput.classList.remove('hidden');
            }
            clearInputs();
        });
    });

    // Clear inputs and errors
    function clearInputs() {
        referenceNumber.value = '';
        customerId.value = '';
        referenceError.textContent = '';
        idError.textContent = '';
    }

    // Allow only numbers
    referenceNumber.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        referenceError.textContent = '';
    });

    customerId.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        idError.textContent = '';
    });

    // Search button handler
    searchBtn.addEventListener('click', function() {
        const searchType = document.querySelector('input[name="searchType"]:checked').value;
        
        if (searchType === 'reference') {
            const refNo = referenceNumber.value;
            if (refNo.length !== 14) {
                referenceError.textContent = 'Reference number must be 14 digits';
                return;
            }
            const type = billType.value;
            window.location.href = `https://bill.pitc.com.pk/pescobill/general?refno=${refNo}&type=${type}`;
        } else {
            const custId = customerId.value;
            if (custId.length !== 10) {
                idError.textContent = 'Customer ID must be 10 digits';
                return;
            }
            window.location.href = `https://bill.pitc.com.pk/pescobill/general?appno=${custId}`;
        }
    });

    // Mobile menu
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon?.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
