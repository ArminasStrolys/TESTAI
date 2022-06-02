import React from 'react';

const SignIn = () => {
    return (
        <div>
            Register account:
            <form className='form-class'>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Repeat password'/>
            </form>

        </div>
    );
}

export default SignIn;
