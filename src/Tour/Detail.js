import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {findById} from "./Service/TourService";

export default function Detail() {
    let {id} = useParams()
    let [tour,setTour] = useState({});
    useEffect(() => {
        findById(id).then(res=>{
            setTour(res)
        })
    }, []);
    return (
        <>
        <div className={'container'} style={{width:'500px'}}>
            <h2>Detail Tour</h2>
            <table className={''}>
                <tbody>
                <tr style={{display:'flex'}}>
                    <td>Tour: </td>
                    <td>{tour.title}</td>
                </tr>

                <tr style={{display:'flex'}}>
                    <td>Price: </td>
                    <td>{tour.price}</td>
                </tr>

                <tr style={{display:'flex'}}>
                    <td>Description: </td>
                    <td>{tour.description}</td>
                </tr>
                <br/>
                <Link className={'btn btn-primary'} to={'/'}>List</Link>
                </tbody>
            </table>
        </div>
        </>
    )
}