import React, { useState } from 'react'
import Question from './Question'
import Data from './Data'

export default function Page() {
    const [questions,setQuestions]=useState(Data)
    return (
        <div className='container'>
            <h3>سوالی برایتان پیش آمده؟</h3>
            <div className='info'>
{
    questions?.map((question,index)=>{
        return <Question {...question} key={index}/>
    })
}
            </div>
        </div>
    )
}
