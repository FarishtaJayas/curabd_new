import { useCollection } from '../../../Hooks/useCollection';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Hotels = () => {

    const { document } = useCollection('Hotels');

    let [data, setData] = useState([]);

    useEffect(
        () => {
            if (document.length !== 0) setData(document);
        }, [document]
    );

    const nav = useNavigate();

    const tables = data.map(
        (info, index) =>
            <tr className="tr-hr">
                <td className="td-hr" scope="row" data-label="SL">{index + 1}</td>
                <td className="td-hr htl-name" data-label="Hotel Name">{info.name}</td>
                <td className="td-hr" data-label="Address">{info.address === "" ? 'Not Given': info.address}</td>
                <td className="td-hr" data-label="Packages">{info.packages.length}</td>
                <td className="td-hr" data-label="Contact">{info.contact === "" ? 'Not Given': info.contact}</td>
            </tr>
    );

    return (
        <>
            <h2 className="heading pt-2">
                HOTELS
            </h2>

            <a href='#' onClick={() => { nav('/form') }} className='add-hotels'>
                <i class="fas fa-plus-square add-icon"></i>
                <span className='add-txt'>
                    ADD HOTELS
                </span>
            </a>

            <table className="table-hr mb-4">
                <thead className="thead-hr">
                    <tr className="tr-hr">
                    <th className='th-hr' scope="col">SL</th>
                        <th className='th-hr' scope="col">Hotel Name</th>
                        <th className='th-hr' scope="col">Address</th>
                        <th className='th-hr' scope="col">Packages</th>
                        <th className='th-hr' scope="col">Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {tables}
                </tbody>
            </table>
        </>

    );
}

export default Hotels;