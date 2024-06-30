import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserSidebar from '../../components/UserProfile/UserSidebar.js'

import './UserProfile.css'

import ChangePassword from '../../components/UserProfile/ChangePassword.js'
import YourOrders from '../../components/UserProfile/YourOrders.js'
import UserAddress from '../../components/UserProfile/UserAddress.js'
import LegalNotice from '../../components/UserProfile/LegalNotice.js'
import AccountSettings from '../../components/UserProfile/AccountSettings.js'
import APIprofile from '../../services/APIprofile.service.js'

const UserProfile =  () => {
  const token = localStorage.getItem("token_user");
  const { activepage } = useParams();
  const [update,setUpdate] = useState(false);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await APIprofile.getProfile(token);
      console.log("🚀 ~ UserProfile ~ profile:", profileData);
      setProfile(profileData);
      setUpdate(false)
    };

    fetchProfile();
  }, [token,update]);

    // alert(activepage)
  return (
    <div className='userprofile'>
         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings user={profile?.userId} updateProfile = {setUpdate}/>}
              {activepage === 'changepassword' && <ChangePassword user={profile?.userId} updateProfile = {setUpdate}/>}
              {activepage === 'yourorders' && <YourOrders order = {profile?.Orders}/>}
              {activepage === 'address' && <UserAddress/>}
              {activepage === 'legalnotice' && <LegalNotice/>}
            </div>
         </div>
      
        </div>
  )
}

export default UserProfile
// address
// : 
// "Address Line 1"
// createdAt
// : 
// "2024-06-25T16:06:37.682Z"
// deliveryDate
// : 
// "2024-06-30T00:00:00.000Z"
// productOrders
// : 
// (3) ['667aef6a53812826298a55da', '667aef6b53812826298a55eb', '667aef6b53812826298a55f4']
// status
// : 
// "onTheWay"
// totalPrice
// : 
// 55370000
// updatedAt
// : 
// "2024-06-28T08:52:03.802Z"
// userId
// : 
// "667aeae8081ed17327be57aa"
// __v
// : 
// 2
// _id
// : 
// "667aeb0d081ed17327be57b9"