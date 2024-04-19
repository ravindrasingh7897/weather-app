import React, { useEffect, useState } from 'react';
import './css/Home.css';




const fetchAllCities = async () => {
    const limit = 100; // Limit per request
    let offset = 0;
    let allCities = [];

    try {
        while (true) {
            const res = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=${limit}&offset=${offset}`);
            const data = await res.json();
            const cities = data.records;
            if (cities.length === 0) break; // No more cities available
            allCities = [...allCities, ...cities];
            offset += limit;
        }
        console.log(allCities);
        return allCities;
    } catch (error) {
        console.error("Error fetching cities:", error);
        return [];
    }
};
fetchAllCities();


const Home = () => {
    let API = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=100";

    const [cities, setCities] = useState([]);
    const [count, setCi] = useState([]);

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setCities(data.results);
            setCi(data.total_count);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    //useEffect runs first when site is opened so fetch data first of all
    useEffect(() => {
        fetchApiData(API);
        //here called a function which is defined upper
    }, []);
    // here [] means we passes array dependencie which means it runs only one time

    return (
        <>
            
            <table className="city-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Timezone</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(city => (
                        <tr key={city.geoname_id}>
                            <td><strong>{city.name}</strong></td>
                            <td>{city.cou_name_en}</td>
                            <td>{city.timezone}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>



            {/* <li>{count}</li> */}


        </>
    );
};

export default Home;
