import React, {createContext, useContext, useEffect, useState} from "react";
import {AsyncStorage} from 'react-native';
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const retrieveData = async () => {
            try {
              const value = await AsyncStorage.getItem('user');
              if (value !== null) {
                // We have data!!
                console.log(value);
              }
              else{
                setUser(JSON.parse(value))
              }
            } catch (error) {
              // Error retrieving data
            }
          };
          retrieveData()
    }, [])
useEffect(()=>{
    const storeData = async () => {
        try {
          await AsyncStorage.setItem(
            'user',
            JSON.stringify(user),
          );
        } catch (error) {
          // Error saving data
        }
      };
      storeData()
}, [user])
return <AuthContext.Provider value={{setUser, user}}>
    {children}
</AuthContext.Provider>
}
export default useGlobalAuthProvider = ()=> useContext(AuthContext)