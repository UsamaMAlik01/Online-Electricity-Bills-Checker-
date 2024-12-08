// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const billTypeContainer = document.getElementById('billTypeContainer');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Form handling
    const searchTypeRadios = document.querySelectorAll('input[name="searchType"]');
    const billNumberInput = document.getElementById('billNumber');
    const searchBtn = document.getElementById('searchBtn');

    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.display = 'none';
    errorDiv.style.color = 'red';
    errorDiv.style.textAlign = 'center';
    errorDiv.style.marginTop = '1rem';
    document.querySelector('.search-form').appendChild(errorDiv);

    // Update placeholder and bill type visibility based on search type
    searchTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'reference') {
                billNumberInput.placeholder = 'Enter 14-digit valid reference no';
                billTypeContainer.style.display = 'flex'; // Show bill type for reference number
                billNumberInput.maxLength = '14';
            } else {
                billNumberInput.placeholder = 'Enter 10-digit Customer ID';
                billTypeContainer.style.display = 'none'; // Hide bill type for customer ID
                billNumberInput.maxLength = '10';
            }
            errorDiv.style.display = 'none'; // Clear any error message on type change
        });
    });

    // Validate input
    billNumberInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
        errorDiv.style.display = 'none'; // Clear error on input
    });

    // Search button click handler
    searchBtn.addEventListener('click', function() {
        const searchType = document.querySelector('input[name="searchType"]:checked').value;
        const billNumber = billNumberInput.value;
        const billType = document.getElementById('billType').value;

        // Validate input
        if (!billNumber) {
            errorDiv.textContent = 'Please enter a valid number';
            errorDiv.style.display = 'block';
            return;
        }

        if (searchType === 'reference') {
            if (billNumber.length !== 14) {
                errorDiv.textContent = 'Reference number must be 14 digits';
                errorDiv.style.display = 'block';
                return;
            }
            // Redirect to GEPCO bill page with reference number
            window.location.href = `https://bill.pitc.com.pk/gepcobill/general?refno=${billNumber}`;
        } else {
            // Customer ID validation (10 digits)
            if (billNumber.length !== 10) {
                errorDiv.textContent = 'Customer ID must be 10 digits';
                errorDiv.style.display = 'block';
                return;
            }
            // Redirect to GEPCO bill page with customer ID
            window.location.href = `https://bill.pitc.com.pk/gepcobill/general?appno=${billNumber}`;
        }
    });
});
