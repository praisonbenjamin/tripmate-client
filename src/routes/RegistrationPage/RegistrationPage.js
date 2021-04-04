import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import RegisterationForm from '../../components/RegistrationForm/RegistrationForm';

const RegisterRoute = (props) => {
    const handleRegisterAttempt = useCallback(() => {
      props.history.push('/login');
    }, [props.history]);
  
    return (
      <div className="register-page">
        <h2 className="register-heading">Create your account</h2>
        <RegisterationForm onRegisterSuccess={handleRegisterAttempt} />
      </div>
    );
  };
  
  export default RegisterRoute;