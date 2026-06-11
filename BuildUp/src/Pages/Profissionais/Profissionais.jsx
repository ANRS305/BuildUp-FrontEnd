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
            img: "https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-2048x1367.jpg"
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
            img: "https://media.istockphoto.com/id/508451296/pt/foto/pintor-com-paintroller-mostrar-uma-paleta-de-cores.jpg?s=612x612&w=0&k=20&c=mRbu9NJycZGYplVoeF5QnPAg6ThCI3hsbqGzM3h5V84="
        },
        {
            id: 4,
            nome: "Bruno Almeida",
            profissao: "Encanador",
            avaliacao: 4.6,
            cidade: "Curitiba",
            estado: "PR",
            preco: "R$ 170/dia",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeR8yADDmPOJf6XGz83AuaNKvDqV2YhfjLzA&s"
        },
        {
            id: 5,
            nome: "Lucas Ferreira",
            profissao: "Carpinteiro",
            avaliacao: 4.9,
            cidade: "Salvador",
            estado: "BA",
            preco: "R$ 200/dia",
            img: "https://blog.ferramentaskennedy.com.br/wp-content/uploads/2024/06/INTERNA-01-Carpinteiro-e-marceneiro-tudo-que-voce-precisa-saber-1.jpg"
        },
        {
            id: 6,
            nome: "Pedro Henrique",
            profissao: "Pedreiro",
            avaliacao: 4.5,
            cidade: "Fortaleza",
            estado: "CE",
            preco: "R$ 155/dia",
            img: "https://soscasacuritiba.com.br/wp-content/uploads/2023/11/como-iniciar-na-profissao-de-pedreiro.webp"
        },
        {
            id: 7,
            nome: "Gabriel Lima",
            profissao: "Eletricista",
            avaliacao: 4.8,
            cidade: "Manaus",
            estado: "AM",
            preco: "R$ 150/dia",
            img: "https://loja.br.abb.com/media/mageplaza/blog/post/s/h/shutterstock_648385093.jpg"
        },
        {
            id: 8,
            nome: "Thiago Santos",
            profissao: "Pintor",
            avaliacao: 4.4,
            cidade: "Porto Alegre",
            estado: "RS",
            preco: "R$ 130/dia",
            img: "https://img.freepik.com/fotos-gratis/jovem-construtor-masculino-sorridente-usando-uniforme-e-capacete-de-seguranca-segurando-o-rolo-de-pintura-com-pincel-branco_141793-74724.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 9,
            nome: "André Costa",
            profissao: "Encanador",
            avaliacao: 4.7,
            cidade: "Recife",
            estado: "PE",
            preco: "R$ 165/dia",
            img: "https://guiadoconstrutor.com.br/storage/uploads/articles/servicos-hidraulicos-o-encanador-funcoes-e-atribuicoes.jpeg"
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
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_9chQfU0dbe8tsd3BtovPfGdnXF5CErVyLg&s"
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