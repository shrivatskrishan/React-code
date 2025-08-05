import React, { useCallback, useEffect, useState } from "react";
const movies = [

  { title: "Avatar", genre: ["action", "drama"] },

  { title: "Inception", genre: ["sci-fi", "thriller"] },

  { title: "The Godfather", genre: ["crime", "drama"] },

  { title: "Toy Story", genre: ["animation", "family", "comedy"] },

  { title: "The Dark Knight", genre: ["action", "crime", "drama"] },

  { title: "Forrest Gump", genre: ["drama", "romance"] },

  { title: "Interstellar", genre: ["sci-fi", "adventure", "drama"] },

  { title: "Parasite", genre: ["thriller", "drama"] },

  { title: "The Lion King", genre: ["animation", "adventure", "family"] },

  { title: "Pulp Fiction", genre: ["crime", "drama"] }

];

 const genres = [

  "action",

  "drama",

  "sci-fi",

  "thriller",

  "crime",

  "animation",

  "family",

  "comedy",

  "romance",

  "adventure"

]

const MovieSearch=()=>{

    const [data,setData]=useState(movies)
    const [changeValue,setChangeValue]=useState('')
    const [selectedValue,setSelectedValue]=useState('')
    const [checkedData,setCheckedData]=useState([])


    const filterMovie=(titleSearch,jonerSearch)=>{
        const filetrData=movies.filter((item)=>{
                   const titleSearchD=item?.title?.toLocaleLowerCase().includes(titleSearch?.toLocaleLowerCase);
                    const jonerSearchD=item?.genre?.find(item=>jonerSearch.split(',').includes(item));
                    if(titleSearchD &&jonerSearchD ){
                            return true
                    }else if(titleSearchD){
                        return true
                    }else if(jonerSearchD){
                        return true
                    }
            })
          return filetrData
    }
     

    useEffect(()=>{
        const searchValue=new URL(window.location.href)
        const titleSearch=searchValue.searchParams.get('movieTitle');
        const jonerSearch=searchValue.searchParams.get('jonerValue');
        setSelectedValue(jonerSearch)
        setChangeValue(titleSearch)
     
        if(titleSearch && jonerSearch){
            const data=filterMovie(titleSearch,jonerSearch)
            setData(data)

        }else if(titleSearch){
            const data=filterMovie(titleSearch,jonerSearch)
            setData(data)
        }else if(jonerSearch){ 
            const data=filterMovie(titleSearch,jonerSearch)
            setData(data)
        }
        else{
            setData(movies)
        }

    },[])

  const changeValueFn=(value)=>{
    debounceChange(value)
  }


    const callDebounce=useCallback(()=>{
         let timer;
        return function(arg){
                
        if(timer){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
                setChangeValue(arg)
                console.log(arg)
                // addParams(changeValue,selectedValue)

        },300)
        }
        
    },[])

    const debounceChange=callDebounce(changeValueFn)

    const selectedValueFn=(item)=>{
            setSelectedValue(item)
            addParams(changeValue,item)


    }



    const addParams=(serachValue,SelectedSearchValue)=>{

        const UrlData=new URL(window.location.href)
        if(serachValue){
             UrlData.searchParams.set('movieTitle',serachValue);
        }else if(SelectedSearchValue){
            UrlData.searchParams.set('jonerValue',SelectedSearchValue)
        }
        window.location.href=  UrlData.toString();
           
            

    }
    const chengeCheckBox=(e,item)=>{
            e.stopPropagation();
           e.preventDefault();
        if(e.target.checked){
                setCheckedData(prev=>[...prev,item])
        }else{
                setCheckedData(prev=>prev.filter(itemData=>itemData!==item))
        }

    }

 


    



    return <div>
        <input type="text" onChange={(e)=>changeValueFn(e.target.value)}  />

        <select onChange={(e) => selectedValueFn(e.target.value)}  value={selectedValue}>
        {genres?.map((item,index)=><option  value={item}  key={`item_${index}`}>
                <input checked={checkedData.includes(item)}  onChange={(e)=>chengeCheckBox(e,item)} type="checkbox"  />
                {item}
        </option>)
       

        }
         </select>

         {data?.map((itemD,index)=> <div style={{display:'flex'}}>
               titel-{itemD?.title} 

              
               <div>{itemD?.genre.join(',')}</div>
            </div>
         )

         }
    </div>
    

}

export default MovieSearch