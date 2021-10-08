import React from 'react'
import { useEffect, createContext, useContext, useState } from "react"
import {init,insertAddress} from '../utils/db/SQLiteManager';

const DbContext = createContext({})

export function DbContextProvider({ children }) {

    const [db, setDb] = useState()

    useEffect(() => {
        init()
        .then(() => console.log('Database initialized'))
        .then(async()=>{
            // await insertAddress("testPain","adult")
            // await insertAddress("testPain2","adult")
            // await insertAddress("testPain3","adult")
            await insertAddress("testPain4","adult")
            // await insertAddress("666","child")
            // console.log('insert success')

        })
        .catch(err => {
          console.log('Database failed to connect')
          console.log(err.message)
        })

    }, [])

    const value = {
        db
    }
    return (
        <DbContext.Provider value={value}>
            {children}
        </DbContext.Provider>
    )
}

export const useDbContext = () => useContext(DbContext)