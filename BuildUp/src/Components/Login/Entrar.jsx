import "./entrar.css";
import { useState } from "react";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "react-icons/ai";

export default function Entrar() {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    return (

        <section className="login">
            <div className="login-card">
                <h1>
                    Entrar
                </h1>
                <p>
                    Entre na sua conta para continuar.
                </p>
                <form className="login-form">
                    {/* NOME */}
                    <div className="input-group">
                        <label>
                            Nome
                        </label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            required
                        />

                    </div>
                    {/* SENHA */}
                    <div className="input-group">
                        <label>
                            Senha
                        </label>
                        <div className="senha-container">
                            <input
                                type={
                                    mostrarSenha
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Digite sua senha"
                                required
                                minLength={6}
                            />
                            <button
                                type="button"
                                className="btn-senha"
                                onClick={() =>
                                    setMostrarSenha(!mostrarSenha)
                                }
                            >
                                {mostrarSenha ? (
                                    <AiOutlineEyeInvisible />
                                ) : (
                                    <AiOutlineEye />
                                )}
                            </button>
                        </div>
                    </div>
                    {/* BOTÃO */}
                    <button className="btn-entrar">
                        Entrar
                    </button>
                </form>
            </div>
        </section>
    );
}