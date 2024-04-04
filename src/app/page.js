import styles from './page.module.css';
import Login from './auth/page';

export default function Home() {
    return (
        <main className={styles.main}>
            <Login />
        </main>
    );
}
