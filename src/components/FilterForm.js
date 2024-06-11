// src/components/FilterForm.js
import React from 'react';

const FilterForm = ({ filters, onChange, setores, filiais }) => {
    const { nome, setor, filial } = filters;

    return (
        <div id="filters">
            <div>
                <label htmlFor="filtro-nome">Nome:</label>
                <input 
                    id="filtro-nome" 
                    type="text" 
                    value={nome} 
                    onChange={(e) => onChange('nome', e.target.value)}
                    placeholder="Digite o nome" 
                />
            </div>
            <div>
                <label htmlFor="filtro-setor">Setor:</label>
                <select 
                    id="filtro-setor" 
                    value={setor} 
                    onChange={(e) => onChange('setor', e.target.value)}
                >
                    <option value="">Todos</option>
                    {setores.map((setor, idx) => (
                        <option key={idx} value={setor}>{setor}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="filtro-filial">Filial:</label>
                <select 
                    id="filtro-filial" 
                    value={filial} 
                    onChange={(e) => onChange('filial', e.target.value)}
                >
                    <option value="">Todas</option>
                    {filiais.map((filial, idx) => (
                        <option key={idx} value={filial}>{filial}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterForm;
