import React, { useState } from 'react';
import Header from '../../components/Header';
import LoginForm from '../../components/auth/LoginForm';
import createSession from '../../actions/createSession';
import { TOKEN } from '../../constants';

const Login: React.FC = () => {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(false);

  function handleInputs(e: any) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  }

  function handleData(e: any) {
    setLoading(true);
    e.preventDefault();
    const StartSession = async () => {
      try {
        const re = await createSession(inputs);
        if (re.success) {
          localStorage.setItem(TOKEN, re.token);
          window.location.href = '/';
          setLoading(false);
        } else {
          alert(re.message);
          setLoading(false);
          return;
        }
      } catch (error) {
        console.warn(error, 'errrr');
      }
    };
    StartSession();
  }

  return (
    <div className="App">
      <Header />
      <LoginForm
        title={'Log in to continue'}
        handleInputs={handleInputs}
        inputs={inputs}
        handleData={handleData}
        loading={loading}
      />
    </div>
  );
};

export default Login;
