import { Auth } from '@supabase/ui';
import Link from 'next/link';

import Layout from '../components/Layout';
import { useAuth, VIEWS } from '../lib/auth';
import { supabase } from '../lib/client';

import styles from '../../styles/stylesheet.module.css'

export default function Home() {
  const { user, view, signOut } = useAuth();

  if (view === VIEWS.UPDATE_PASSWORD) {
    return (
      <Layout>
        <Auth.UpdatePassword supabaseClient={supabase} />
      </Layout>
    );
  }

  return (
    <Layout>
      {user && (
        <>
          <h2 className={styles.heading}>Hey, thank you for signing up!</h2>
          You have been enrolled as, <code className={styles.highlight}>{user.email}</code>
          
          <button type="button" className={styles.button} onClick={signOut}>
            Sign Out
          </button>
        </>
      )}
      {!user && <div className={styles.card}> 
        <span className={styles.heading}>
			    Welcome
        </span> 
        <Auth supabaseClient={supabase} /> </div> }
    </Layout>
  );
}
