import "./Profissionais.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";
import { estados } from "./estados";
import {
    HiOutlineMagnifyingGlass,
    HiOutlineMapPin
} from "react-icons/hi2";

export default function Profissionais() {
    const [categoria, setCategoria] = useState("Todos");
    const [busca, setBusca] = useState("");
    const [estadoSelecionado, setEstadoSelecionado] = useState("Todos");
    const profissionais = [
        {
            id: 1,
            nome: "João Silva",
            profissao: "Pedreiro",
            avaliacao: 4.9,
            cidade: "São Paulo",
            estado: "SP",
            preco: "R$ 180/dia",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            nome: "Carlos Mendes",
            profissao: "Eletricista",
            avaliacao: 4.8,
            cidade: "Rio de Janeiro",
            estado: "RJ",
            preco: "R$ 160/dia",
            img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            nome: "Rafael Souza",
            profissao: "Pintor",
            avaliacao: 4.7,
            cidade: "Belo Horizonte",
            estado: "MG",
            preco: "R$ 140/dia",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            nome: "Bruno Almeida",
            profissao: "Encanador",
            avaliacao: 4.6,
            cidade: "Curitiba",
            estado: "PR",
            preco: "R$ 170/dia",
            img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            nome: "Lucas Ferreira",
            profissao: "Carpinteiro",
            avaliacao: 4.9,
            cidade: "Salvador",
            estado: "BA",
            preco: "R$ 200/dia",
            img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 6,
            nome: "Pedro Henrique",
            profissao: "Pedreiro",
            avaliacao: 4.5,
            cidade: "Fortaleza",
            estado: "CE",
            preco: "R$ 155/dia",
            img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 7,
            nome: "Gabriel Lima",
            profissao: "Eletricista",
            avaliacao: 4.8,
            cidade: "Manaus",
            estado: "AM",
            preco: "R$ 150/dia",
            img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            nome: "Thiago Santos",
            profissao: "Pintor",
            avaliacao: 4.4,
            cidade: "Porto Alegre",
            estado: "RS",
            preco: "R$ 130/dia",
            img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 9,
            nome: "André Costa",
            profissao: "Encanador",
            avaliacao: 4.7,
            cidade: "Recife",
            estado: "PE",
            preco: "R$ 165/dia",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 10,
            nome: "Marcos Vinícius",
            profissao: "Carpinteiro",
            avaliacao: 4.6,
            cidade: "Goiânia",
            estado: "GO",
            preco: "R$ 210/dia",
            // Nova foto: Retrato com foco no rosto e visual profissional
            img: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=500&q=80"
        }
    ];
    const filtrados = profissionais.filter((p) => {
        const matchCategoria =
            categoria === "Todos" || p.profissao === categoria;
        const matchBusca =
            p.nome.toLowerCase().includes(busca.toLowerCase());
        const matchEstado =
            estadoSelecionado === "Todos" ||
            p.estado === estadoSelecionado;

        return matchCategoria && matchBusca && matchEstado;
    });

    return (
        <>
            <Header />
            <section className="profissionais">
                {/* HEADER */}
                <div className="profissionais-header">
                    <h1>Encontre o profissional ideal</h1>
                    <p>Compare avaliações, preços e especialidades.</p>
                </div>
                {/* FILTROS */}
                <div className="filtros">
                    <div className="pesquisa">
                        <HiOutlineMagnifyingGlass />
                        <input
                            type="text"
                            placeholder="Buscar profissional..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />
                    </div>
                    {/* SELECT DE ESTADOS (SIGLAS) */}
                    <select
                        value={estadoSelecionado}
                        onChange={(e) =>
                            setEstadoSelecionado(e.target.value)
                        }
                    >
                        <option value="Todos">Todos os estados</option>
                        {estados.map((estado) => (
                            <option key={estado} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="conteudo-profissionais">
                    {/* CATEGORIAS */}
                    <aside className="categorias">
                        <h3>Categorias</h3>
                        {[
                            "Todos",
                            "Pedreiro",
                            "Pintor",
                            "Eletricista",
                            "Encanador",
                            "Carpinteiro"
                        ].map((item) => (
                            <button
                                key={item}
                                className={categoria === item ? "active" : ""}
                                onClick={() => setCategoria(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </aside>
                    {/* LISTA */}
                    <div className="lista-profissionais">
                        {filtrados.map((p) => (
                            <div key={p.id} className="profissional-card">
                                <img src={p.img} alt={p.nome} />
                                <div className="profissional-info">
                                    <h2>{p.nome}</h2>
                                    <p>{p.profissao}</p>
                                    <span>
                                        ⭐ {p.avaliacao} (128 avaliações)
                                    </span>
                                    <div className="localizacao">
                                        <HiOutlineMapPin />
                                        {p.cidade} - {p.estado}
                                    </div>
                                </div>
                                <div className="profissional-preco">
                                    <h3>{p.preco}</h3>
                                    <button>Contratar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}