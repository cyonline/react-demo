let test = ()=>{
    console.info('箭头')
    
}

test()

let testPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.info('promise')
        resolve('end')
    },2000)
})
testPromise.then(res=>{
    console.info(res)
})

import './index.less'
import './index.css'
import './assets/1.jpg'
import './assets/2.jpg'