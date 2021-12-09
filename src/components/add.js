import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../option/userSlice';
import {logoutauth,isLogin,remove} from '../auth'


function Add()
{
     const [productname, setName] = useState('');
     const [description, setDesc] = useState('');
     const [original_price, setOriginal] = useState('');
    const [price, setPrice] = useState('');
    const [imagename, setImage] = useState('');
     const [url, setUrl] = useState('');
     const [isimage, setIsimage] = useState('');

     const dispatch =useDispatch();
     
     const history =useHistory();
    

     const handleSubmit =  async () => {

        let f =new FormData()

        f.append('productname',productname)
        f.append('description',description)
        f.append('original_price',original_price)
        f.append('price',price)
        f.append('image_name',imagename)
        f.append('url',url)
        f.append('is_Listimage',isimage)
        

        axios({
           method : 'post',
           url:'http://127.0.0.1:8000/Prod/',
            data : f
       }).then((response)=>
       {
           console.log(response.data);
           alert('1 item  added')
           history.push('/show')
       })
    }
    
    const handleLogout = () => {

        let loggedOut =false;
        logoutauth();
        
        loggedOut=true;
   
        dispatch(
            logout(
                {
                 loggedOut
                }
            )
        )
    }
   
     return(
        <div>
              <table className="table table-bordered">
                <tbody>
                    
                    <tr>
                        <th>Product Name</th>
                        <td>
                            <input  name="productname"  value={productname} onChange=
                            {e => setName(e.target.value)} type="text" 
                            className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>
                            <input  name="description"  value={description} onChange=
                            {e => setDesc(e.target.value)} type="text"
                             className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>original_price</th>
                        <td>
                            <input  name="original_price"  value={original_price} onChange=
                            {e => setOriginal(e.target.value)} type="text" 
                            className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Price</th>
                        <td>
                            <input  name="price"  value={price} onChange=
                            {e => setPrice(e.target.value)} type="text" 
                            className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>image_name</th>
                        <td>
                            <input  name="image_name"  value={imagename} onChange=
                            {e => setImage(e.target.value)} type="text"
                             className="form-control" />
                        </td>
                    </tr>
                    
                    <tr>
                        <th>Url</th>
                        <td>
                            <input  name="url"  value={url} onChange=
                            {e => setUrl(e.target.value)} type="text" 
                            className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Is_Image</th>
                        <td>
                            <input  name="is_Listimage"  value={isimage} onChange=
                            {e => setIsimage(e.target.value)} type="checkbox" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                    <td colSpan="2">
                            <input type="submit" onClick={handleSubmit} style={{fontSize:'25px'}} className="btn btn-dark mr-5" />
                                                     
                            <Link onClick={handleLogout} className="btn btn-danger mr-5" style={{fontSize:'25px'}} to="/login" >Logout</Link>          
                        </td>
                        </tr>
                    
                </tbody>
            </table>
                </div>

    )
}
export  default Add;
    
