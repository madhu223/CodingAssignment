import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function LoginPage() {
  let navigate = useNavigate();
  // function handleClick() {
  //   navigate('/dashboard');
  // }
  const inputData = { username: '', password: '' };
  const [formData, setFormData] = useState(inputData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // let isValid = validate(formData);
    // console.log(isValid);
    setFormErrors(validate(formData));
    setIsSubmit(true);

    // let resu = () => {
    //   if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   }
    //   return;
    // };
    // setIsSubmit(resu());
    // navigate('gridView');
    // {
    //   Object.keys(formErrors).length === 0 && isSubmit ? (
    //     navigate('/dashboard')
    //   ) : (
    //     <pre>{JSON.stringify(formData, undefined, 2)}</pre>
    //   );
    // }
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   navigate('/dashboard');
    // }

    // console.log(resu());
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate('gridView');
      console.log(formData);
    }
  }, [formErrors, isSubmit]);
  const validate = (values) => {
    const errors = {};
    //  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex = /^[A-Za-z0-9\-]+$/;
    // const regexp = /^([a-zA-Z0-9!@#$%^&*]+)$/;
    const regexp = /([A-Za-z0-9\-]+)([^\w\s]+)/;
    if (!values.username) {
      errors.username = 'Username is required!';
    } else if (!regex.test(values.username)) {
      errors.username =
        'username should contain only alphanumeric  without space!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!regexp.test(values.password)) {
      errors.password =
        'password should contain only alphanumeric and 1 special charector!';
    }
    return errors;
  };

  return (
    <div className='App'>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
      )} */}

      <form className='form-group' onSubmit={handleSubmit}>
        <div className='container'>
          <h2> Login Page </h2>
          <br />
          <div>
            <label htmlFor='name'>username</label> &nbsp;
            <input
              type='text'
              id='name'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Enter username'
              required
            />
          </div>{' '}
          <p>{formErrors.username}</p>
          <br />
          <div>
            <label htmlFor='password'>password</label> &nbsp;
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter password'
              required
            />
          </div>
          <p>{formErrors.password}</p>
          <br />
          &nbsp; <button type='submit'>Login</button>
          {/* <button onClick={handleClick}>Login</button> */}
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
