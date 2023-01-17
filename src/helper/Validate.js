import { toast } from "react-hot-toast"


/** Validate login page username */

export async function userNameValidate(values) {
    const errors = userNameVerify({}, values)

    return errors
}

/**  Validate UserName */

function userNameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error('Username Required')
    }
    else if (values.username.includes(' ')) {
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


/** Validate Reset Password */

export async function resetPasswordValidation(values) {
    const errors = passwordVerify({}, values)

    if (values.password !== values.confirm_password) {
        errors.exist = toast.error('password not matched')
    }

    return errors
}