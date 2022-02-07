import Head from 'next/head';
import styles from '../../styles/stylesheet.module.css';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-center py-2 min-h-screen">
      <Head>
					<title>Eduonetech-Jayraj Rathod</title>
					<link rel='manifest' href='/manifest.json' />

					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='application-name' content='Eduonetech-Jayraj Rathod' />
					<meta name='apple-mobile-web-app-title' content='Eduonetech-Jayraj Rathod' />
					<meta name='theme-color' content='#0db1a1' />
					<meta name='msapplication-navbutton-color' content='#0db1a1' />
					<meta
						name='apple-mobile-web-app-status-bar-style'
						content='black-translucent'
					/>
					<meta name='msapplication-starturl' content='/login' />
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1, shrink-to-fit=no'
					/>

					<link rel='icon' sizes='192x192' href='/android-chrome-192x19.png' />
					<link
						rel='apple-touch-icon'
						sizes='192x192'
						href='/android-chrome-192x192.png'
					/>
					<link rel='icon' sizes='512x512' href='/android-chrome-512x512.png' />
					<link
						rel='apple-touch-icon'
						sizes='512x512'
						href='/android-chrome-512x512.png'
					/>
				</Head>

      <main className={styles.main}>
        
        <div className={styles.form}>
          {children}
        </div>
      </main>
    </div>
  );
}
