import {Link, useNavigate} from "react-router-dom";
// import {useState} from "react";
import {Field, Form, Formik} from "formik";
import {createT} from "./Service/TourService";

export  default function Create(){
    let navigate = useNavigate();

    function createTour(e) {
        createT(e,navigate).then(()=>{
            alert('Create success!')
        })
    }
    return (
        <>
            <div className={'container'} style={{width:'500px'}}>
                <h1>Form Create</h1>
                <Formik initialValues={{
                    title: '',
                    price: '',
                    description: ''
                }} onSubmit={e => {createTour(e)}}>
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
                        <button className={'btn btn-primary'}>Create</button>
                        <Link className={'btn btn-info'} to={'/'}>Cancel</Link>
                    </div>
                </Form>
                </Formik>
            </div>
        </>
    )
}