import React from 'react'
import Email from './Email';
import Name from './Name';
import Adress from './Adress';
import Personalinfo from './Personalinfo';
import './Profile.css';
const Profile = () => {
  return (
    <div>
        <Name name = 'Nazrin Hasanova'/>
    <Personalinfo personalinfo ='cute'/>
    <Email email = 'nezrinhesenova607@gmail.com'/>
    <Adress adress = 'Ataturk strt'/>
    </div>
  )
}

export default Profile