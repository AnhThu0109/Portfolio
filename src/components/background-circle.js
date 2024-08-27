import styles from '@/components/background-circle.module.css'

export default function Circle() {
  return (
    <div className={styles.ripple}>
      <div className={`${styles.circle} ${styles.xxlarge} ${styles.shade1}`}></div>
      <div className={`${styles.circle} ${styles.xlarge} ${styles.shade2}`}></div>
      <div className={`${styles.circle} ${styles.large} ${styles.shade3}`}></div>
      <div className={`${styles.circle} ${styles.medium} ${styles.shade4}`}></div>
      <div className={`${styles.circle} ${styles.small} ${styles.shade5}`}></div>
    </div>
  );
}
