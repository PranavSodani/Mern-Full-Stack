import { useSelector } from "react-redux";
import { useState } from "react";
import {updateUserStart,updateUserSuccess,updateUserFailure} from '../redux/user/userSlice';
import { useDispatch } from "react-redux";
export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);
  const [formData,setFormData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id] : e.target.value});
  }
  const handleSubmit = async (e) => { 
    e.preventDefault();
    try{
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),

      });
      const data = await res.json();
      if(data.success === false){
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
    }
    catch(error){
      dispatch(updateUserFailure(error.message))
    }
  }
  return (
    <div className="p-3 mx-auto max-w-lg">
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <img className="h-24 w-24 rounded-full object-cover cursor-pointer self-center mt-2" src={currentUser.avatar} alt="profile" onError={(e) => e.target.src = '/images/image.png'} />
        <input type="text" onChange={handleChange} placeholder="username"  defaultValue={currentUser.username}  className="border p-3 rounded-lg" id="username"/>
        <input type="email"  onChange={handleChange}placeholder="email" defaultValue={currentUser.email}className="border p-3 rounded-lg" id="email"/>
        <input type="password"  placeholder="password"  onChange={handleChange}className="border p-3 rounded-lg" id="password"/>
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">update</button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  )
}
