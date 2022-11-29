import React from 'react'
import { useState } from 'react'
import './LoginForm.scss'


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.prevenDefalt();
        const newEntry = { email: email, password: password }

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);

    }

return (
    <>
        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3 className='text-center pt-3'>Sign In</h3>
                    </div>
                    <div class="card-body">
                        <form onSubmit={submitForm}>
                            <div class="input-group form-group">
                                <input
                                    type="text"
                                    class="form-control mb-3"
                                    placeholder="username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="input-group form-group">
                                <input
                                    type="password"
                                    class="form-control mb-3"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div class="row align-items-center remember mb-2">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div class="form-group">
                                <input
                                    type="submit"
                                    value="Login"
                                    class="btn btn-warning ps-4 pe-4 mt-2 button"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">
                            Don't have an account?<a href="#">Sign Up</a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="#">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default LoginForm