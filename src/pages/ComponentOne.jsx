import React , {useState} from 'react'

export default function ComponentOne (){
    const [name,setName] = useState('')

    const nameChange = (e) => {
        console.info(e.target.value)
        setName(e.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={nameChange}/>
            姓名:{name}
        </div>
    )
}

