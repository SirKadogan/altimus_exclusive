import React, { useState, useCallback } from 'react';

// Libraries
import { useHistory } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

// Hooks
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

// Services
import { login } from '../../services/auth';

// Assets
import Logo from '../../assets/logo.png';

import styles from './styles';

const Login: React.SFC = () => {
  const history = useHistory();
  const { setIsAuthenticated } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const handleEmail = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handlePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(async () => {
    localStorage.setItem('customToken', 'qzVwQBvJYWIEIxH2A91cGrVRvGCPMGZO');
    setLoading(true);
    try {
      await login({ email, password });
      setLoading(false);
      setIsAuthenticated(true);
      history.push('/home');
    } catch (err) {
      setLoading(false);
      showToast({
        body: err,
        severity: 'error',
        title: 'Erro',
      });
    }
  }, [email, password]);

  return (
    <div className="full-screen p-d-flex p-flex-column ">
      <img className="p-m-5 p-as-center" src={Logo} alt="logo" />
      <Card className="p-d-block p-mx-auto" style={{ width: 360 }}>
        <div className="p-fluid ">
          <div className="p-field p-mb-4">
            <span className="p-float-label">
              <InputText id="emailInput" value={email} onChange={handleEmail} />
              <label htmlFor="in">Email</label>
            </span>
          </div>
          <div className="p-field p-mb-4">
            <span className="p-float-label">
              <InputText
                id="passwordInput"
                type="password"
                value={password}
                onChange={handlePassword}
              />
              <label htmlFor="in">Senha</label>
            </span>
          </div>

          <Button
            label={loading ? 'Carregando..' : 'LOGIN'}
            icon={loading ? 'pi pi-spin pi-spinner' : ''}
            onClick={handleLogin}
          />
        </div>
      </Card>
    </div>
  );
};

export default Login;
