// Utils
import waitMilliseconds from '../utils/waitMilliseconds';

interface LoginProps {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginProps): Promise<void> => {
  await waitMilliseconds(2000);

  if (email !== 'altimus@exclusive.com' || password !== '123456') {
    throw 'Credenciais inválidas';
  }
};
