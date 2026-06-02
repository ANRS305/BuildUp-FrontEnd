import "./cadastro.css";
import { useState } from "react";
import {
    AiOutlineEye,
    AiOutlineEyeInvisible
} from "react-icons/ai";

export default function Cadastro() {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (

        <section className="cadastro">
            <div className="cadastro-card">
                <h1>
                    Criar conta
                </h1>
                <p>
                    Crie sua conta e comece a planejar sua obra.
                </p>
                <form className="cadastro-form">
                    {/* NOME */}
                    <div className="input-group">
                        <label>
                            Nome completo
                        </label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>
                    {/* EMAIL */}
                    <div className="input-group">
                        <label>
                            E-mail
                        </label>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                    </div>
                    {/* TELEFONE */}
                    <div className="input-group">
                        <label>
                            Telefone
                        </label>
                        <input
                            type="tel"
                            placeholder="(11) 99999-9999"
                            required
                            maxLength={11}
                            onInput={(e) => {
                                e.target.value =
                                    e.target.value.replace(/\D/g, "");
                            }}
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
                    <button className="btn-cadastrar">
                        Criar conta
                    </button>
                </form>
            </div>
        </section>
    );
}