import React, {useEffect, useState} from "react"

import Authors from "../Authors/Authors"
import getDataRequest from "../../data/getDataRequest"
import "./style.css"

type ItemType = {
    name: string
    id: number 
    avatar: string
}

const CommentsList = () => {

    const [items, onItems] = useState([])
    getDataRequest()
    .then((data: any) => onItems(data.authors)) 

    const [elems, onElems] = useState([])
    getDataRequest()
    .then((data:any) => onElems(data.comments))

    const sortData = elems.filter((elem: any) => elem.created)
    .map((item:any)=>{
        let nums = Date.parse(item.created)
        return(
            {
                id: item.id,
                created: nums,
                text: item.text,
                author: item.author,
                parent: item.parent,
                likes: item.likes,
            }
        )
    })
    .sort((a, b) => a.created - b.created)
    .map((item: any) =>{ 
        return (
            <Authors key={item.id} item={item} items={items}/>  
        )
    })

    console.log(sortData) 

    const num = Date.parse("2021-07-05T14:44:01")
    new Date(num)
    console.log(new Date(num)) 
    
    return (
        <section className="solution_2">
            <h3>Comments list</h3>
            {sortData}
        </section>
    )
}
export default CommentsList
