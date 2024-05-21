import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Companies(){
    const [companiesData, setCompanyData] = useState([]);
    const [searchText, setSearchtext] = useState("");
    const pull_data = async () => {
        let url_string = "";
        if(searchText) {
        url_string += "&search_text="+searchText
        }
        const result = await axios.get("http://localhost:3305/companies?page_size=20&precise=1"+url_string);
        setCompanyData(result.data);
    }

    // fetching initial data
    useEffect(()=>{
        // pull_data();
    })
    return (
        <div>
        <h1>Companies</h1>

        <input id="searchTxt" placeholder="Search Sector"
            onChange={(e) => {
            setSearchtext(e.target.value);
        }} />  <button onClick={(e) => {
            pull_data();
        }}>Search</button>

        <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Sector</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            {companiesData.map(company => (
            <tr id={company.Symbol}>
                <th scope="row">1</th>
                <td><a href={"/companies/view/" + company._id} className="btn btn-link">{company.Name}</a></td>
                <td>{company.Symbol}</td>
                <td>{company.Sector}</td>
                <td>
                <a href={"/companies/view/" + company._id} className="btn btn-primary">View</a>  

                <a href={"/companies/edit/" + company._id} className="btn btn-link">Edit</a> 
                </td>
            </tr>
        ))}
        </tbody>
        </table>
        </div>
    )
}