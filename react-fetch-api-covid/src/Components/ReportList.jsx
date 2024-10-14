import { useEffect, useState } from 'react';
const ReportList = () => {

    const [data, setData] = useState();


    const getCovidData = async () => {
        let covidData = await fetch("https://data.covid19india.org/v4/min/data.min.json").then((data) => {
            return data.json();
        }).catch(() => { console.log("Fetch Api Failed: ") });
        setData(covidData);
    }


    useEffect(() => {
        getCovidData();
    }, []);

    let keyData;

    if (data) {
        keyData = Object.keys(data);
    }

    return (
        <>
            <br />
            <br />
            <div className='container'>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">State</th>
                                <th scope="col">Confirmed</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Death</th>
                            </tr>
                        </thead>
                        <tbody>
                            {keyData ? keyData.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{val}</td>
                                        <td>{data[val].total.confirmed}</td>
                                        <td>{data[val].total.recovered}</td>
                                        <td>{data[val].total.deceased}</td>
                                    </tr>
                                )
                            }) :
                                <tr>
                                    <td colSpan="5" className="center">Oops! No Data Found.</td>
                                </tr>}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ReportList;