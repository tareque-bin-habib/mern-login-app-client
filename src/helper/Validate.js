import { toast } from "react-hot-toast"


/** Validate login page username */

export async function userNameValidate(values) {
    const errors = userNameVerify({}, values)

    return errors
}

/**  Validate UserName */

function userNameVerify(error = {}, values) {
    if (!values.userName) {
        error.username = toast.error('Username Required')

    }
    else if (values.userName.includes(' ')) {
        error.username = toast.error('Invalid username...!')
    }

    return error
}



/** Validate password */

export async function passwordValidate(values) {
    const errors = passwordVerify({}, values)

    return errors
}


function passwordVerify(errors = {}, values) {

    const specialCaracters = /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;


    if (!values.password) {
        errors.password = toast.error('Password required...!')
    }
    else if (values.password.includes(' ')) {
        errors.password = toast.error('Wrong Password')
    }
    else if (values.password.length < 4) {
        errors.password = toast.error('Password must be 4 characters long')
    }
    else if (!specialCaracters.test(values.password)) {
        errors.password = toast.error('Password must have special charecters')

    }

    return errors
}


/** Validate register form */

export async function registerValidation(values) {
    const errors = userNameVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)

    return errors;
}


/** Validate Profile page */
export async function profileValidation(values) {
    const errors = emailVerify({}, values)
    return errors
}


/** Validate Reset Password */

export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values)

    if (values.password !== values.confirm_password) {
        errors.exist = toast.error('password not matched')
    }

    return errors
}

/** Validate Email */

function emailVerify(error = {}, values) {
    if (!values.email) {
        error.email = toast.error('Email required')
    }
    else if (values.email.includes(' ')) {
        error.email = toast.error('Wrong Email')
    }
    return error
}