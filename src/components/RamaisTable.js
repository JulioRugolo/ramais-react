// src/components/RamaisTable.js
import React from 'react';

const RamaisTable = ({ colaboradores }) => (
    <table>
        <thead>
            <tr>
                <th>Ramal</th>
                <th>Colaborador</th>
                <th>Filial</th>
                <th>Setor</th>
            </tr>
        </thead>
        <tbody>
            {colaboradores.map((colaborador, idx) => (
                <tr key={idx}>
                    <td>{colaborador.RAM_ST_RAMAL}</td>
                    <td>{colaborador.RAM_ST_COLABORADOR}</td>
                    <td>{colaborador.RAM_ST_FILIAL}</td>
                    <td>{colaborador.RAM_ST_SETOR}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default RamaisTable;
