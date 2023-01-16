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
