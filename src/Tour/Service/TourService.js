import axios from "axios";

export const findAllTour = () => {
    return new Promise(resolve => {
        resolve(axios.get('http://localhost:3000/tuors').then((res)=>{
            return res.data
        }).catch(()=>{
            return []
        }))
    })
}
export const findById = (id) => {
    return new Promise(resolve => {
        resolve(axios.get('http://localhost:3000/tuors/'+id).then(res=>{
            return res.data
        }).catch(()=>{
            return {}
        }))
    })
}
export const createT=(tour,navigate) =>{
    return new Promise(resolve => {
        resolve(axios.post('http://localhost:3000/tuors',tour).then(()=>{
            return navigate('/')
        }).catch(()=>{
            return navigate('/create')
        }))
    })
}
export const updateT=(id,tour,navigate)=>{
    return new Promise(resolve => {
        resolve(axios.put('http://localhost:3000/tuors/'+id ,tour).then(()=>{
            return navigate('/')
        }).catch(()=>{
            return navigate('/update')
        }))
    })
}
export const deleteById = (id) => {
    return new Promise(resolve => {
        resolve(axios.delete('http://localhost:3000/tuors/'+id).then(res=>{
            return res.data
        }).catch(()=>{
            return {}
        }))
    })
}