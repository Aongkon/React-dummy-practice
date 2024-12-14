import  { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error , setError] = useState(null)

    useEffect(()=>{
        setTimeout(() => {
            fetch(url)
            
            .then((res) => {
                if(!res.ok){
                    throw Error("Fetching is not successful")
                }
                else{
                    return res.json()
                }
            })
            .then((data) => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch((error) => {
                setError(error.message)
                setIsLoading(false)
            })
        }, 3000)
    }, [url])//customs hook e amra url er opor base kore dependency "url" reload hobe

    return {data, isLoading, error}//jokhon ey useFetch take kew use korbe tokhoni oitar sathe sathe eygolor bebohar jate hoy tar jonno egola "return" korte hoy
}
//ekhon jekhane eta proyojon amra sekhane etake object hisebe use korteparbo 
export default useFetch;
//jotobar ey customs hook take use kora hobe totobar user "url" take pathabe er madddhome amra jekono jayda theke ey useFetch take use korte parbo