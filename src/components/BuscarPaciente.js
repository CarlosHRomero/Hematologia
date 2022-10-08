import React, { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';

const BuscarPaciente = ({ filtro, setFiltro }) => {
    return (
        <table>
            <colgroup>
                <col style={{ width: "10%" }} />
                <col style={{ width: "35%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "10%" }} />
                <col style={{ width: "15%" }} />
                <col style={{ width: "15%" }} />
            </colgroup>
            <tbody>
                <tr>
                    <td>
                        <Form.Control
                            type="number"
                            value={filtro.hcnum}
                            onChange={e => {
                                setFiltro({ ...filtro, ['hcnum']: e.target.value })
                            }}
                            className='form-control' /></td>
                    <td>
                        <input type='text'
                            value={filtro.apeNom}
                            onChange={e => {
                                setFiltro({ ...filtro, ['apeNom']: e.target.value })
                            }}
                            className='form-control' />
                    </td>
                    <td><Form.Control
                        type="Date"
                        value={filtro.ultCons}
                        onChange={e => {
                            setFiltro({ ...filtro, ['ultCons']: e.target.value })
                        }}
                    /></td>
                    <td><input type='text' className='form-control' /></td>
                    <td><input type='text' className='form-control' /></td>
                    <td><input type='text' className='form-control' /></td>
                </tr>

            </tbody>

        </table>



    )
}

export { BuscarPaciente }