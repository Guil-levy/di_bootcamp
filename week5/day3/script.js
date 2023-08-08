// function handleSubmit(e){
//     e.preventDefault();
//     const form = e.target;
//     const fNameValue = form.elements.fname.value;
//     const lNameValue = form.elements.lname.value;
//     console.log('form was submited' , fNameValue , lNameValue);
// }
/** ACCES Forms */
// const frm1 = document.getElementById('form1');
// console.log(frm1);
// const forms = document.forms;
//  console.log(forms[0]);
// console.log(myform1);

/*Acces an input*/
// const email = document.getElementById("myemail");
// console.log(email);

// const forms = document.forms[0];
// const elements = forms.elements;
// console.log(elements[1]);
// console.log(elements.myemail);

function getvalue(e){
        e.preventDefault();

        const form = document.forms[0];
        const form_1 = e.target;
        const form_1_1 = document.getElementById("form1");
        const form_1_2 = document.elements["exerciceform"];
        const first_name = form.elements[0].value;
        const fNameValue = form.elements.fname.value;
        const last_name = form.elements[1].value;
        const lNameValue = form.elements.lname.value;
        console.log(first_name);
        console.log(fNameValue);
        console.log(last_name);
        console.log(lNameValue);

}