class LoginPage{

getLogInLabel(){
    return cy.get('h4')
}
getEmailUsernameInputField(){
    return cy.get("#identity")
}
getPasswordInputField(){
    return cy.get("#password")
}
getLogInButton(){
    return cy.get(".btn")
}
getStayLogedInLabel(){
    return cy.get("p > label")
}
getForgotPasswordButton(){
    return cy.get(".col-md-12 > :nth-child(1) > a")
}

}
export default LoginPage;