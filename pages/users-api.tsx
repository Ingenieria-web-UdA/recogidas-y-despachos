import { User } from '@prisma/client';
import axios from 'axios';
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

const options = {
  method: 'GET',
  url: 'http://localhost:3000/api/users',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer este es mi token'}
};

const UserPage: NextPage = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // un useEffect vacio se ejecuta cuando la pagina se renderiza, cuando se carga la pagina voy a pedir los datos al BE
  useEffect(() => {
    const getUserData = async () => {
      try{
        setLoading(true);
        const response = await axios.request(options);
        setUsers(response.data.users);
        setLoading(false);
      } catch(e){
        console.log('Error', e);
      }
    };

    getUserData();
  }, []);
  
  if(loading) return <p>Loading...</p>;
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Contraseña</th>
                </tr>
            </thead>
            <tbody>
              {users.map((user)=>(
                  <tr key={`user_${user.id}`}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                  </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserPage