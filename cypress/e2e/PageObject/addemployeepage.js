class addEmployeePage{
    addEmployeeSubMenu(){
        return 'Add Employee'
    }
    firstNameInput(){
        return 'input[name="firstName"]'
    }
    lastNameInput(){
        return 'input[name="lastName"]'
    }
    saveButton(){
        return 'button[type="submit"]'
    }
    successMessage(){
        return 'Successfully Saved'
    }
    requiredErrorMesssage(){
        return 'gfh'
    }
}
const addEmployee = new addEmployeePage()
 export default addEmployee