const  form = document.getElementById('form');
const signupButton = document.getElementById('signup');
const signinButton = document.getElementById('signin');

form.addEventListener ('submit', function(event) {
    let valid = true;
    event.preventDefault();    
    const fname = document.getElementById('fname');   
    const lname = document.getElementById('lname'); 
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

                
    const cpass = document.getElementById('cpass'); 
    const pass = document.getElementById('pass');
    
    const firsterror=document.getElementById('fname-error');
    const lasterror=document.getElementById('lname-error');
    const emailerror=document.getElementById('email-error');
    const phoneerror=document.getElementById('phone-error');
    const passerror=document.getElementById('pass-error');
    const cpasserror=document.getElementById('cpass-error');

    // Clear previous error messages
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
            
        const namePattern = /^[a-zA-Z]+$/;

            // First name validation
            if (!fname.value.trim()) { 
                firsterror.textContent = 'First name is required';
                valid = false;
            }
            else if(!namePattern.test(fname.value)) {
                firsterror.textContent = 'letters only';
                valid = false;
            }
            
            // Last name validation
            if (!lname.value.trim()) { 
                lasterror.textContent = 'Last name is required';
                valid = false;
            }
            else if(!namePattern.test(lname.value)) {
                lasterror.textContent = 'letters only';
                valid = false;
            }   


 // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!email.value.trim()) {
                emailerror.textContent = 'Email is required';
                valid = false;
            }
            else if(!emailPattern.test(email.value)) {
                emailerror.textContent = 'Invalid email';
                valid = false;
            }

    // Phone validation - only accepts 09 or +251 at start
            const phonePattern = /^(09\d{8}|\+251\d{9})$/;
            if(!phone.value.trim()) {
                phoneerror.textContent = 'Phone number is required';
                valid = false;
            }
            else if(!phonePattern.test(phone.value)) {
                phoneerror.textContent = 'Phone must start with 09(10 digits) or +251(12 digits) Eth';
                valid = false;
            } 
                        
 // Password validation
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
            if(!pass.value.trim()) {
                passerror.textContent = 'Please enter password';
                valid = false;
            }
            else if(!passwordPattern.test(pass.value)) {
                passerror.textContent = 'At least 8 chars and contain Numbers,capital,small letters, with special chars';
                valid = false;
            }
            
            // Confirm password validation
            if(!cpass.value.trim()) {
                cpasserror.textContent = 'Please confirm password';
                valid = false;
            }
            else if(cpass.value !== pass.value) {
                cpasserror.textContent = 'Do not match';
                valid = false;
            }
            
            const success = document.getElementById('Complete');
            if(valid) {
                success.textContent = 'sign up successful!';
                // You might want to submit the form here if validation passes
                form.submit();
            }
        });
            
        const cpass = document.getElementById('cpass'); 
        const pass = document.getElementById('pass');
         let showp=false;

    function show(){
        showp=!showp;
        showp?cpass.type='text':cpass.type='password';
                  
        }
    
    
    function hide(){
        showp=!showp;

        if(showp){
            pass.type='text';
        }
        else{
pass.type='password';
            
        }
    }
    
signupButton.addEventListener('click', () => {
    allback.classList.add('right-panel-active');
});

signinButton.addEventListener('click', () => {
    allback.classList.remove('right-panel-active');
});


