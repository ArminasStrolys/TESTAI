import React from 'react';

const SignIn = () => {
    return (
        <div className='sign'>
            Register account:
            <form className='form-class'>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <input type="password" placeholder='Repeat password'/>
                <button>Register</button>
            </form>

        </div>
    );
}

export default SignIn;
