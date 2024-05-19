import { useEffect, useState } from 'react';

const Tiles = ({ name, flag, altFlag }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '1px solid black', width: '200px', height: '200px', margin: '10px', borderRadius: '10px' }}>
            <img style={{ width: '100px', height: '100px' }} src={flag} alt={altFlag} />
            <h3>{name}</h3>
        </div>
    )
}

const Countries = () => {
    const [counties, setCountries] = useState([]);
    const url = 'https://restcountries.com/v3.1/all';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
            {counties.map((items) =>
                <Tiles key={items.cca3} name={items.name.common} flag={items.flags.png} altFlag={items.flags.alt} />
            )}
        </div>
    );
}

export default Countries;