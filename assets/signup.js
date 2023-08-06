$(document).ready(function () {

    /*
        Function which returns true if all the fields are not empty.
        Otherwise, this function returns false.
        This trims leading and trailing blank spaces
        then checks if the values are not empty.
    */
    function isFilled() {

        /*
            gets the value of a specific field in the signup form
            then removes leading and trailing blank spaces
        */
        var email = validator.trim($('.reg-form #email').val());
        var username = validator.trim($('.reg-form #username').val());
        var password = validator.trim($('.reg-form #password').val());

        /*
            checks if the trimmed values in fields are not empty
        */
        var emailEmpty = validator.isEmpty(email);
        var usernameEmpty = validator.isEmpty(username);
        var passwordEmpty = validator.isEmpty(password);

        return !emailEmpty && !usernameEmpty && !passwordEmpty;
    }

    /*
        Function which returns true if value of `password` is a valid.
        Otherwise, this function returns false.
        A valid password must contain AT LEAST 8 characters.

        The function has 1 parameter:
        - field - refers to the current <input> field calling this function
    */
    function isValidPassword(field) {

        // sets initial value of return variable to false
        var validPassword = false;

        /*
            gets the value of `pw` in the signup form
            removes leading and trailing blank spaces
            then checks if it contains at least 8 characters.
        */
        var password = validator.trim($('.reg-form #password').val());
        var isValidLength = validator.isLength(password, {min: 8});

        // if the value of `pw` contains at least 8 characters
        if(isValidLength) {

            /*
                check if the <input> field calling this function
                is the `pw` <input> field
            */
            if(field.is($('.reg-form #password')))
                // remove the error message in `idNumError`
                $('#pwError').text('');

            /*
                since  the value of `pw` contains at least 8 characters
                set the value of the return variable to true.
            */
            validPassword = true;
        }

        // else if the value of `pw` contains less than 8 characters
        else {

            /*
                check if the <input> field calling this function
                is the `password` <input> field
            */
            if(field.is($('.reg-form #password')))
                // display appropriate error message
                alert(`Passwords should contain at least 8
                    characters.`);
        }

        // return value of return variable
        return validPassword;
    }

    /*
        Function which checks if the `field` is empty.
        This also calls functions isFilled(), isValidPassword(), and
        isValidID().
        This is attached to the `keyup` event of each field
        in the signup form.
        This activates the `submit` button if:
        - value returned by function isFilled() is true
        - value returned by function isValidPassword() is true

        The function has 3 parameters:
        - field - refers to the current <input> field calling this function
        - fieldName - the `placeholder` of the current <input> field calling
        this function
        - error - the corresponding <p> element to display the error of the
        current <input> field calling this function
    */
    function validateField(field, fieldName, error) {

        /*
            gets the value of `field` in the signup form
            removes leading and trailing blank spaces
            then checks if the trimmed value is empty.
        */
        var value = validator.trim(field.val());
        var empty = validator.isEmpty(value);

        // if the value of `field` is empty
        if(empty) {
            /*
                set the current value of `field` to an empty string
                this is applicable if the user just entered spaces
                as value to the `field`
            */
            field.prop('value', '');
            // display approriate error message in `error`
            alert(fieldName + ' should not be empty.');
        }

        // else if the value of `field` is not empty
        else
            // remove the error message in `error`
            error.text('');

        // call isFilled() function to check if all field are filled
        var filled = isFilled();

        /*
            call isValidPassword() function
            to check if the value of `pw` field is valid
        */
        var validPassword = isValidPassword(field);
            /*
                if all fields are filled
                and the password contains at least 8 characters
                and the ID number contains exactly 8 digits and is unique
                then enable the `submit` button
            */
            if(filled && validPassword)
                $('.reg-form #submit').prop('disabled', false);

            /*
                else if at least one condition has not been met
                disable the `submit` button
            */
            else
                $('.reg-form #submit').prop('disabled', true);

    }

    /*
        attach the event `keyup` to the html element where id = `email`
        this html element is an `<input>` element
        this event activates when the user releases a key on the keyboard
    */
        $('.reg-form #email').keyup(function () {

            // calls the validateField() function to validate `email`
            validateField($('.reg-form #email'), 'Enter your e-mail address', $('#fNameError'));
        });

    /*
        attach the event `keyup` to the html element where id = `username`
        this html element is an `<input>` element
        this event activates when the user releases a key on the keyboard
    */
    $('.reg-form #username').keyup(function () {

        // calls the validateField() function to validate `username`
        validateField($('.reg-form #username'), 'Enter your username', $('#fNameError'));
    });

    /*
        attach the event `keyup` to the html element where id = `password`
        this html element is an `<input>` element
        this event activates when the user releases a key on the keyboard
    */
    $('#pw').keyup(function () {

        // calls the validateField() function to validate `password`
        validateField($('.reg-form #password'), 'Enter password', $('#pwError'));
    });

});