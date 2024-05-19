import { useEffect, useState } from 'react';
import axios from 'axios';

const Countries = () => {
    const [counties, setCountries] = useState([]);
    const url = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        axios.get(url).then((response) => {
            setCountries(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            {counties.map((items) => {
                return (
                    <div key={items.cca3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid black', width: '200px', height: '200px', margin: '10px', borderRadius: '10px' }}>
                        <img style={{ width: '100px', height: '100px' }} src={items.flags['png']} alt={items.cioa} />
                        <h3>{items.name['common']}</h3>
                    </div>
                )
            })}
        </div>
    );
}

export default Countries;