import {useEffect, useState} from "react";
import {deleteById, findAllTour} from "./Service/TourService";
import {Link} from "react-router-dom";

export default function Home() {
    let [tours, setTours] = new useState([])
    let [check,setCheck] = new useState(false)
    useEffect(() => {
        findAllTour().then(res=>{
            setTours(res)
        })
    }, [check]);
    function deleteTour(id) {
        if (window.confirm('Are you sure?')){
            deleteById(id).then(()=>{
                setCheck(!check)
                alert('Delete done!')
            })
        }
    }
    return (
        <>
            <h1 style={{textAlign: 'center'}}> List Tour</h1>
        <div className={'container'}>
            <Link className={'btn btn-primary'}  to={'/create'}>Create</Link>
            <table className={'table table-hover'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th colSpan={2}>Action</th>
                </tr>
                </thead>
                <tbody>
                {tours.map((t,key=0) =>{
                    return (
                        <>
                        <tr>
                            <td>{++key}</td>
                            <td>
                               <Link style={{textDecoration:'none',color:'black'}} to={'/detail/'+t.id}>{t.title}</Link>
                            </td>
                            <td>{t.price}</td>
                            <td>
                                <Link className={'btn btn-warning'} to={'/update/'+t.id}>Update</Link>
                                <button className={'btn btn-danger'} onClick={()=>{deleteTour(t.id)}}>Delete</button>
                            </td>
                        </tr>
                        </>
                    )
                })}

                </tbody>
            </table>
        </div>
        </>
    )
}