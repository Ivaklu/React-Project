import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "KliushinIV21@st.ithub.ru" && password === "123456") {
      alert("Вход успешен!");
      navigate("/Posts");
    } else {
      alert("Неправильные данные!");
    }
  };

  // Встроенные стили
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "50px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    label: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "10px",
    },
    input: {
      padding: "5px",
      marginBottom: "10px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <p style={styles.title}>Авторизация</p>
      <br />
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Введите Ваш email:
          <input
            style={styles.input}
            type="email"
            placeholder="Введите email"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label style={styles.label}>
          Введите Ваш пароль:
          <input
            style={styles.input}
            type="password"
            placeholder="Введите пароль"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button style={styles.button} type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
