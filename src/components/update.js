import { Link } from 'react-router-dom';
import React from 'react';




class Update extends React.Component{
    constructor(){
        super();
        this.state={
            
            productname:'',
            description:''

            
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        var base_id=this.props.match.params.base_id;
        fetch('http://127.0.0.1:8000/apps/basemodel/'+base_id+'/',{
            method:'PUT',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));
        alert('The value is Updated');
    }

    fetchData(){
        var base_id=this.props.match.params.base_id;
        fetch('http://127.0.0.1:8000/apps/basemodel/'+ base_id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                
                productname:data.productname,
                description:data.description
               
            });
            
            console.log(data);
           
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    
                    <tr>
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
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm}  style={{fontSize:'10px'}} className="btn btn-dark mr-5" />
                            <Link className="btn btn-danger mr-5" to="/Show" style={{fontSize:'10px'}}>Close</Link>
                        </td>
                    </tr>               
                </tbody>
               
            </table>
        );
    }
}

export default Update;