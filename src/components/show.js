import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Show =()=>
{
    const [pname,setname]=useState([]);
    
    const history = useHistory();
    // const getname= async ()=>
    // {
    //     const response = await axios.get('http://127.0.0.1:8000/Prod/')
    //     setname(response.data)
      
    // }
    useEffect(()=>
    {
        // getname();
          axios.get('http://127.0.0.1:8000/Prod/').then((res)=>
          {
            setname(res.data);
          })
        
        
     
    },[]);
    
    const deleteData=async(id)=>
    {
        alert('Are You Sure Want to delete ?');
        axios.delete('http://127.0.0.1:8000/Prod/'+id+'/')
        .then(response=>response) 
        
     console.log('ok')
       history.push('/show')
    }
    
       
           
    return(
    <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
    <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
    
    <h1>List of Product: {pname.length}<br/><br/><br/></h1>
                
          {          
                 
            pname.map((name,index) =>(
   <><img src={name.url} alt={name.image_name} /><br/><br/><br/>
        <h3 style={{fontSize:'20px'}}>Product Name:{name.productname} </h3>
       <h3 style={{fontSize:'20px'}}>Description:{name.description}</h3>
        <h3 style={{fontSize:'20px'}}>Original Price:{name.original_price}</h3>
        <h3 style={{fontSize:'20px'}}>Price:{name.price}</h3><br/>
        <Link className="btn btn-info mr-5" style={{fontSize:'25px',color:'Black'}} 
        to={`/${name.id}/Showdetails`}>Show product</Link> <br/><br/>

<Link onClick={()=>deleteData(name.id)} className="btn btn-danger mr-5" to='' style={{fontSize:'20px'}}>Delete
</Link><br/><br/>
    
      
    
       </>
        
       
            
  ))}

  
          
               
              

    
    </div>
    </div>
    
    )}

export default Show;