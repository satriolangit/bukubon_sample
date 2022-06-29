import Image from 'next/image';
import styles from '../styles/Register.module.css';

export default function Register() {
  return (
    <div className={styles.pageContainer}>
      <Image
        src={`https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`}
        alt=""
        layout="fill"
        className={styles.bgImage}
      />
      <div className={styles.formContainer}>
        <form action="">
          <div className={styles.form_input_container}>
            <div className={styles.form__label}>
              <label>Email</label>
            </div>
            <div className={styles.form__input}>
              <input
                type="text"
                className={styles.form__control}
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <div className={styles.form_input_container}>
            <div className={styles.form__label}>
              <label>Password</label>
            </div>
            <div className={styles.form__input}>
              <input
                type="password"
                className={styles.form__control}
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className={styles.form_input_container}>
            <div className={styles.form__label}>
              <label>Confirmation Password</label>
            </div>
            <div className={styles.form__input}>
              <input
                type="text"
                className={styles.form__control}
                placeholder="Re-type your password"
              />
            </div>
          </div>
          <button type="submit" className={styles.form__button}>
            Register me
          </button>
        </form>
      </div>
    </div>
  );
}
