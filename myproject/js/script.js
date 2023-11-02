function validation()
{
    let firstname = document.registration.firstname.value;
    let lastname = document.registration.lastname.value;
    let email = document.registration.email.value;
    let phonenumber = document.registration.phonenumber.value;
    let Alternate_No = document.registration.Alternate_No.value;
    let Department = document.registration.Department.value;
    let College_Fees = document.registration.College_Fees.value;

    if(firstname == null || firstname =="")
    {
       alert("Name should not be empty"); 
       return false;
    }

    else if(lastname == null || lastname =="")
    {
        alert("Name should not be empty");
        return false;
    }

    else if(email == "@" && email == "gmail.com")
    {
        alert("Email contain valid information");
        return false;
    }

    else if(phonenumber == null || phonenumber =="")
    {
        alert("phone number should not be empty");
        return false;
    }

    else if(Alternate_No == null || Alternate_No =="")
    {
        alert("phone number should not be empty");
        return false;

    }


    else if(Department == null || Department =="")
    {
        alert("department should not be empty");
        return false;

    }

    else if(College_Fees == null || College_Fees == "")
    {
        alert("Fees should not be empty");
        return false;
    }
    

}