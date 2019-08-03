
let btnFirstName = $("#btnCfirstName")
let btnLastName = $("#btnClastName")
let firstNameInput = document.querySelector("#firstName")
let lastNameInput = document.querySelector("#lastName")



btnFirstName.on("click",function(){
    let form = $("#targetName")
    $( "#target" ).submit();
   let firstName = $( "#firstName" ).val()
    let firstNameCont = $("#FirstNameCont")

    $(firstNameCont).append(firstName)
    $(form).hide()

})


btnLastName.on("click",function(){
    let form = $("#targetLastName")
    $( "#target" ).submit();
   let lastName = $( "#lastName" ).val()
    let lastNameCont = $("#lastNameCont")

    $(lastNameCont).append(lastName)
    $(form).hide()

})