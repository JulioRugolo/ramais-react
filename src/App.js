import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterForm from './components/FilterForm';
import RamaisTable from './components/RamaisTable';
import './App.css';

const App = () => {
    const [filters, setFilters] = useState({ nome: '', setor: '', filial: '' });
    const [colaboradores, setColaboradores] = useState([]);
    const [setores, setSetores] = useState([]);
    const [filiais, setFiliais] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const url = 'http://www.urldaapi.com.br'; // URL da API

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const data = response.data;

                setColaboradores(data);

                // Extraindo setores e filiais únicos
                const setoresUnicos = [...new Set(data.map(item => item.RAM_ST_SETOR))].filter(Boolean);
                const filiaisUnicas = [...new Set(data.map(item => item.RAM_ST_FILIAL))].filter(Boolean);

                setSetores(setoresUnicos);
                setFiliais(filiaisUnicas);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };
        fetchData();
    }, []);

    const handleFilterChange = (key, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [key]: value }));
    };

    const filteredColaboradores = colaboradores.filter(colaborador => {
        const matchNome = colaborador.RAM_ST_COLABORADOR.toUpperCase().includes(filters.nome.toUpperCase());
        const matchSetor = filters.setor ? colaborador.RAM_ST_SETOR === filters.setor : true;
        const matchFilial = filters.filial ? colaborador.RAM_ST_FILIAL === filters.filial : true;
        return matchNome && matchSetor && matchFilial;
    });

    return (
      <>
        <header>
          <img src="https://www.phenixtransportes.com.br/wp-content/uploads/2024/04/Logo-Phenix-Branco.png" alt="Logo Phenix Transportes" />
          <h1>Lista de Ramais</h1>
        </header>
        <div className="form-container container">
            <FilterForm 
                filters={filters} 
                onChange={handleFilterChange} 
                setores={setores} 
                filiais={filiais} 
            />
            {loading ? ( // Renderiza o componente de loading enquanto os dados estão sendo carregados
                <div className="loading"></div>
            ) : (
                <RamaisTable colaboradores={filteredColaboradores} />
            )}
        </div>
    </>
    );
};

export default App;
