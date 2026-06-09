import "./Profissionais.css";
import { estados } from "./estados";
import {
    HiOutlineMagnifyingGlass,
    HiOutlineMapPin
} from "react-icons/hi2";

export default function Profissionais() {
    return (
        <section className="profissionais">
            <div className="profissionais-header">
                <h1>
                    Encontre o profissional ideal
                </h1>
                <p>
                    Compare avaliações, preços e especialidades.
                </p>
            </div>

            {/* FILTROS */}

            <div className="filtros">

                <div className="pesquisa">

                    <HiOutlineMagnifyingGlass />

                    <input
                        type="text"
                        placeholder="Buscar profissional..."
                    />

                </div>

                <select>
                    <option>Todos os estados</option>

                    {estados.map((estado) => (
                        <option key={estado} value={estado}>
                            {estado}
                        </option>
                    ))}
                </select>

                <select>
                    <option>Todas as especialidades</option>
                    <option>Pedreiro</option>
                    <option>Eletricista</option>
                    <option>Pintor</option>
                </select>

            </div>

            <div className="conteudo-profissionais">

                {/* CATEGORIAS */}

                <aside className="categorias">

                    <h3>Categorias</h3>

                    <button>Todos</button>
                    <button>Pedreiro</button>
                    <button>Pintor</button>
                    <button>Eletricista</button>
                    <button>Encanador</button>
                    <button>Carpinteiro</button>

                </aside>

                {/* LISTA */}

                <div className="lista-profissionais">

                    <div className="profissional-card">

                        <img
                            src="https://placehold.co/100x100"
                            alt=""
                        />

                        <div className="profissional-info">

                            <h2>
                                João Silva
                            </h2>

                            <p>
                                Pedreiro
                            </p>

                            <span>
                                ⭐ 4.9 (128 avaliações)
                            </span>

                            <div className="localizacao">

                                <HiOutlineMapPin />

                                São Paulo, SP

                            </div>

                        </div>

                        <div className="profissional-preco">

                            <h3>
                                R$ 180/dia
                            </h3>

                            <button>
                                Ver perfil
                            </button>

                        </div>

                    </div>

                    <div className="profissional-card">

                        <img
                            src="https://placehold.co/100x100"
                            alt=""
                        />

                        <div className="profissional-info">

                            <h2>
                                Carlos Mendes
                            </h2>

                            <p>
                                Eletricista
                            </p>

                            <span>
                                ⭐ 4.8 (96 avaliações)
                            </span>

                            <div className="localizacao">

                                <HiOutlineMapPin />

                                São Paulo, SP

                            </div>

                        </div>

                        <div className="profissional-preco">

                            <h3>
                                R$ 150/dia
                            </h3>

                            <button>
                                Ver perfil
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );
}