import React,{useState,useRef,useEffect} from 'react'
import styles from './Test.module.css'
function Test() {

const [name,setName]   = useState('')
const [name2,setName2]   = useState('')
const renderCount = useRef(0)
const [v,setV] = useState(0)
const [v1,setV1] = useState(1)
var [ax,setAx] = useState("   MicroPls Computer Repair Services Melbourne                                                      ")
const [t1,setT1] = useState(1)
var ax2 = 'Move To Next'

ax.split('')
ax2.split('')
var ar = ax

useEffect(()=> {
    
    renderCount.current = renderCount.current + 1
    if(ax.length > v) {
    setTimeout(()=> {
          setName([...name,ar[v]])
        setV(v + 1)
    },20)
    }
    if(ax.length == v) {
        if(ax.length >= v1) {
        setTimeout(()=> {
            setName(name.slice(0 ,-1))
            setV1(v1 + 1)
            console.log(name.length)
           if(name.length == 1){
            setV(0)
            setV1(1)
          setAx("  For all your Computer repair needs                                                      ")
            console.log('next')
            setT1(2)
            if(t1 == 2) {
                setAx("   MicroPls Computer Repair Services Melbourne                                                      ")
                setT1(1)
            }
           }
      },20)
    }}
   return;
},[v,v1])


    return (
        <div>
         <div className={styles.typewriter}>{name}</div>   
          <p/>
        </div>
    )
}

export default Test
