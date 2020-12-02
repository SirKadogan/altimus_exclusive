import React, { useState, useCallback } from 'react';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import styles from './styles';

const Login: React.SFC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handlePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    console.log(email, password);
  }, [email, password]);

  return (
    <div className="full-screen" style={styles.container}>
      <Card className="p-col-2">
        <div className="p-fluid">
          <div className="p-field">
            <span className="p-float-label">
              <InputText id="emailInput" value={email} onChange={handleEmail} />
              <label htmlFor="in">Email</label>
            </span>
          </div>
          <div className="p-field">
            <span className="p-float-label">
              <InputText
                id="passwordInput"
                value={password}
                onChange={handlePassword}
              />
              <label htmlFor="in">Senha</label>
            </span>
          </div>

          <Button label="LOGIN" onClick={handleLogin} />
        </div>
      </Card>
    </div>
  );
};

export default Login;
