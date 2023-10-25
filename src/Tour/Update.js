import {Link, useNavigate, useParams} from "react-router-dom";
import { findById, updateT} from "./Service/TourService";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";

export default function Update() {
    let navigate = useNavigate();
    let [tour,setTour] = useState({});
    let {id}=useParams()
    useEffect(() => {
        findById(id).then(res=>{
            setTour(res)
        })
    }, []);
    function updateTour(e) {
        updateT(id,e,navigate).then(()=>{
            alert('Update success!')
        })
    }
    return (
        <>
            <div className={'container'} style={{width:'500px'}}>
                <h1>Form Update</h1>
                <Formik initialValues={tour} onSubmit={e => {updateTour(e)}}
                enableReinitialize={true}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor={'title'} className="form-label">Title</label>
                            <Field type={'text'} name={'title'} className={'form-control'}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={'price'} className="form-label">Price</label>
                            <Field type={'text'} name={'price'} className={'form-control'}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={'description'} className="form-label">Description</label>
                            <Field type={'text'} name={'description'} className={'form-control'}/>
                        </div>
                        <div className="mb-3">
                            <button className={'btn btn-primary'}>Update</button>
                            <Link className={'btn btn-info'} to={'/'}>Cancel</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}