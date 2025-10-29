<script>
    // === 1. GLOBAL SCOPE VARIABLE ===
    const companyName = "Gemini Tech Solutions"; 

    // === 2. Function to Update the Header (DOM Manipulation & Global Scope) ===
    function updateHeader(newName) {
        // Accesses the GLOBAL variable companyName
        console.log(`Initial Company Name (Global Scope): ${companyName}`); 
        
        // Updates the <h1> element using the passed parameter
        const headerH1 = document.querySelector('header h1');
        headerH1.textContent = newName; 
    }

    // Call the function on load to personalize the page
    updateHeader(companyName); // Passes the global variable as a parameter
    
    // === 3. Function with Local Scope & Return Value (Calculation) ===
    function calculateDiscount(originalPrice, discountPercentage) {
        // These variables (finalPrice, discountAmount) have LOCAL scope 
        // and only exist inside this function.
        const discountAmount = originalPrice * (discountPercentage / 100);
        const finalPrice = originalPrice - discountAmount;
        
        // Returns the calculated value
        return finalPrice; 
    }

    // Example of calculation reuse and local scope:
    const productA = 100;
    const finalPriceA = calculateDiscount(productA, 20); // 20% off
    console.log(`Product A final price: $${finalPriceA}`); // Output: $80
    
    // === 4. Function to Toggle CSS Animation (DOM & CSS Control) ===
    function toggleFooterAnimation() {
        const footer = document.querySelector('footer p');
        
        // This variable (isActive) is LOCAL to this function call
        let isActive = footer.classList.contains('active-spin'); 

        if (isActive) {
            footer.classList.remove('active-spin');
            footer.textContent = `© 2025 ${companyName}. All rights reserved.`;
        } else {
            footer.classList.add('active-spin');
            // Demonstrates using the return value from the calculation function
            footer.textContent = `FLASH SALE! Get it for only $${calculateDiscount(100, 15)}!`; 
        }
    }

    // Attach the toggle function to the contact button for demonstration
    const contactButton = document.querySelector('button[type="submit"]');
    contactButton.addEventListener('click', function(event) {
        event.preventDefault(); // Stop the form from submitting for now
        toggleFooterAnimation();
    });
    // Add a new CSS keyframe for the spin animation (put this in your <style> block)
</script>
