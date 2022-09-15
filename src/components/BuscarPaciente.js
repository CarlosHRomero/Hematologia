import React, { useCallback, useState } from 'react';


const BuscarPaciente = () => {
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
                    <td><input type='text'  className='form-control'/></td>
                    <td><input type='text'  className='form-control'/></td>
                    <td><input type='text'  className='form-control'/></td>
                    <td><input type='text'  className='form-control'/></td>
                    <td><input type='text'  className='form-control'/></td>
                    <td><input type='text'  className='form-control'/></td>
                </tr>

            </tbody>

        </table>



    )
}

export { BuscarPaciente }