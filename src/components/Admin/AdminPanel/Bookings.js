import { useCollection } from '../../../Hooks/useCollection';
import { useState, useEffect } from 'react';

const Bookings = () => {
    const { document } = useCollection('BookingData');

    let [data, setData] = useState([]);

    useEffect(
        () => {
            if (document.length !== 0) {
                let mydata = document.sort((a, b) => {
                    return new Date(b.checkInDate) - new Date(a.checkInDate); // sorting Array
                });
                setData(mydata);
            };
        }, [document]
    );

    const tables = data.map(
        (info, index) =>
            <tr className="tr-v">
                <td className="td-v" scope="row" data-label="SL">{index + 1}</td>
                <td className="td-v" data-label="Name">{info.name}</td>
                <td className="td-v" data-label="Phone no.">{info.number}</td>
                <td className="td-v" data-label="Email">{info.email}</td>
                <td className="td-v" data-label="Hotel">{info.HotelName}</td>
                <td className="td-v" data-label="Room name">{info.roomName}</td>
                <td className="td-v" data-label="Check in">{info.checkInDate}</td>
                <td className="td-v" data-label="Check out">{info.checkOutDate}</td>
                <td className="td-v" data-label="Adults">{info.numOfAdult}</td>
                <td className="td-v" data-label="Childrens">{info.numOfChild}</td>
            </tr>
    );

    return (
        <>
            <h2 className="heading pt-2">
                BOOKINGS
            </h2>

            <table id="table-v">
                <tbody>
                    {tables}
                </tbody>
            </table>
        </>
    );
}

export default Bookings;