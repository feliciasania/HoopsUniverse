const form = document.getElementById('form');
const username = document.getElementById('username');
const phonenumber = document.getElementById('phonenumber')
const email = document.getElementById('email');
const address = document.getElementById('address');
const postalcode = document.getElementById('postalcode');
const district = document.getElementById('district');
const dob = document.getElementById('dob')

var err = false
form.addEventListener("submit",function() {
	// trim to remove the whitespaces
	err = false
	const usernameValue = username.value.trim();
	const phonenumberValue = phonenumber.value.trim();
	const emailValue = email.value;
	const addressValue = address.value.trim();
	const postalcodeValue = postalcode.value.trim();
	const districtValue = district.value;
	const dobValue = dob.value;

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
		err = true
	} else if(usernameValue.search(" ") !== -1){
		setErrorFor(username, 'Username cannot be use space');
		err = true
	} else {
		setSuccessFor(username);
	}

	if(phonenumberValue === '') {
		setErrorFor(phonenumber, 'Phone number cannot be blank');
		err = true
	} else {
		setSuccessFor(phonenumber);
	}

	if(addressValue === '') {
		setErrorFor(address, 'Address cannot be blank');
		err = true
	} else {
		setSuccessFor(address);
	}

	if(postalcodeValue === '') {
		setErrorFor(postalcode, 'Postal Code cannot be blank');
		err = true
	} else if(postalcodeValue.length < 5 || postalcodeValue.length > 5){
		setErrorFor(postalcode, 'Postal Code must 5 number');
		err = true
	} else {
		setSuccessFor(postalcode);
	}

	if ( ( form.gender[0].checked == false ) && ( form.gender[1].checked == false ) && err == false)
	{
		err = true
		alert ( "Please choose your Gender" );
	}
	if ( ( form.kurir[0].checked == false ) && ( form.kurir[1].checked == false ) && ( form.kurir[2].checked == false ) 
	&& ( form.kurir[3].checked == false )&& ( form.kurir[4].checked == false ) && err == false)
	{
		err = true
		alert ( "Please choose your Delivery" );
	}
	if ( ( form.payment[0].checked == false ) && ( form.payment[1].checked == false ) 
	&& ( form.payment[2].checked == false ) && ( form.payment[3].checked == false ) && err == false)
	{
		err = true
		alert ( "Please choose your Payment" );
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
		err = true
	} else if (checkEmail(emailValue) == false) {
		err = true
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if(districtValue === ''){
		// alert ( "Please choose your Province" );
		setErrorFor(district, 'Province cannot be blank');
		err = true
	} else {
		setSuccessFor(district);
	}

	if(dobValue === ''){
		setErrorFor(dob, 'Date Of Birth cannot be blank');
		err = true
	} else if(checkDate(dob.valueAsNumber) == false ){
		setErrorFor(dob, 'You must 18 years or older');
		err = true
	} else {
		setSuccessFor(dob);
	}


	console.log(err)
	if(err == true){
		event.preventDefault()
	} else {
		alert ( "Success" );
	}

});

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'group error';
	small.innerText = message;
	err = true
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'group success';
}
	
function checkEmail(email){
    if(! (email.endsWith("@gmail.com") || email.endsWith("@yahoo.com"))){
        return false
    }
    if(email.indexOf("@") != email.lastIndexOf("@")){
        return false
    }
    if(email.indexOf[("@")+1] == "." || email.indexOf[("@")-1] == "."){
        return false
    }
    return true
}

function checkDate(date){
    var currDate = new Date()
    currDate.setFullYear(currDate.getFullYear()-18)
    if(date - currDate > 0){
        return false
    }
    return true
}









