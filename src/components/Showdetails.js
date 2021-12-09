import React from "react";
import {Link} from 'react-router-dom'
import axios from "axios";

class Showdetails extends React.Component{
    constructor(){
        super();
        this.state={
            id :'',
            productname:'',
            description:'',
            originalprice:'',
            price :'',
            image:'',

            
        }
        this.changeHandler=this.changeHandler.bind(this);
        // this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    // submitForm(){
    //     var base_id=this.props.match.params.base_id;
    //     fetch('http://127.0.0.1:8000/apps/basemodel/'+base_id+'/',{
    //         method:'PUT',
    //         body:JSON.stringify(this.state),
    //         headers:{
    //             'Content-type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .then(response=>response.json())
    //     .then((data)=>console.log(data));
    //     alert('The value is Updated');
    // }
     deleteData=async(id)=>
    {
        alert('Are You Sure Want to Delete?');
    
        axios.delete('http://127.0.0.1:8000/Prod/'+id+'/')
        .then(response=>response) 
        
     console.log('ok')
      
    }
        
        
    fetchData(){
        var id=this.props.match.params.id;
        console.log(id);
        fetch('http://127.0.0.1:8000/Prod/'+ id+'/')
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);
            this.setState({

                id:data.id,
                image:data.url,
                productname:data.productname,
                 description:data.description,
                 originalprice:data.original_price,
                 price :data.price,
                

               
            });
            
            console.log(data);
            // console.log('hi')
           
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
           <div>
<center>

               <img src={this.state.image} />
                {/* <h1>{this.state.id}</h1> */}
               <p style={{fontSize:'25px'}}>Productname : {this.state.productname}</p>
               <p style={{fontSize:'25px'}}> Description : {this.state.description}</p>
               <p style={{fontSize:'25px'}}> Original Price : {this.state.originalprice}</p>
               <p style={{fontSize:'25px'}}> Price : {this.state.price}</p>

               <Link className="btn btn-danger mr-5" to="/Show" style={{fontSize:'20px'}}>Back</Link>

               <Link onClick={()=>this.deleteData(this.state.id)} className="btn btn-danger mr-5" to="" style={{fontSize:'20px'}}>Delete</Link>
</center>

               
            {/* <input type="text" value={this.state.productname} 
             onChange={this.changeHandler} 
             className="form-control" />

<input type="text" value={this.state.description} 
             onChange={this.changeHandler} 
             className="form-control" />

              <input type="text" value={this.state.originalprice} 
             onChange={this.changeHandler} 
             className="form-control" /> */}
</div>





            // <table className="table table-bordered">
            //     <tbody>
                    
                    /* <tr>
                        <th>Product Name</th>
                        <td>
                            <input type="text" value={this.state.productname} 
                            name="productname" onChange={this.changeHandler} 
                             className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <input type="text" value={this.state.description} 
                            name="description" onChange={this.changeHandler} 
                             className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <input type="text" value={this.state.description} 
                            name="description" onChange={this.changeHandler} 
                             className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <input type="text" value={this.state.description} 
                            name="description" onChange={this.changeHandler} 
                             className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Image</th>
                        <td>
                            <input type="text" value={this.state.image} 
                            name="image" onChange={this.changeHandler} 
                             className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm}  style={{fontSize:'10px'}} className="btn btn-dark mr-5" />
                            <Link className="btn btn-danger mr-5" to="/Show" style={{fontSize:'10px'}}>Close</Link>
                        </td>
                    </tr>               
                </tbody>
               
            </table> */
        );
    }
}

export default Showdetails;