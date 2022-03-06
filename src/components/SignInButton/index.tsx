import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/react';

export function SignInButton() {
  const { data: session, status } = useSession();

  return status === 'authenticated' ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04D361" />
      Jeferson Mesquita
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </button>
  );
}
