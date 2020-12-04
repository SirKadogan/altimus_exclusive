import React, { useState, useCallback } from 'react';

// Libraries
import { useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// Hooks
import { useAuth } from '../../hooks/auth';

import styles from './styles';

const Login: React.SFC = () => {
  const history = useHistory();
  const { setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handlePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    localStorage.setItem('customToken', 'qzVwQBvJYWIEIxH2A91cGrVRvGCPMGZO');
    setIsAuthenticated(true);
    history.push('/home');
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
