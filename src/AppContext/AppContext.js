import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext()

export function AppContextProvider({ children }) {

    const [loading, setloading] = useState(false);
    const [posts, setposts] = useState([]);
    const [page, setpage] = useState(1);
    const [totalpages, settotalpages] = useState(null);



    async function fetchblogposts(page=1) {
        setloading(true)
        let url = `${baseUrl}?page=${page}`
        try 
        {
            let response = await fetch(url)
            let data = await response.json()
            console.log("printing data")
            console.log(data)
            setpage(data.page)
            setposts(data.posts)
            settotalpages(data.totalPages)
         } 
        catch (error) {
           console.log("something went wrong")
           setpage(1)
           setposts([])
           settotalpages(null)
        }
        setloading(false)
    }

    function handlepagechange(page) {
        setpage(page)
        fetchblogposts(page)
    }

    const value = {
        loading,
        setloading,
        posts,
        setposts,
        page,
        setpage,
        totalpages,
        settotalpages,
        handlepagechange,
        fetchblogposts,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
