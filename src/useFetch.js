import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)  

    useEffect(() => {
        
        const abortController = new AbortController() 
        
            fetch(url, { signal: abortController.signal })
            .then(res => {
                console.log(res)
                if(!res.ok){
                    throw Error('could not fetch the data for the resource')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                setData(data.products)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else{
                    setIsPending(false)
                    setError(err.message)
                }
                
            })
            // return () => console.log('cleanup');
            return () => abortController.abort()

        },[url]);


    return { data, isPending, error }
    // we use the objects datatype, bcz the order of the elements of objects doesn't matter 
}   

export default useFetch