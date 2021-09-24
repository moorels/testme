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
const [t2,setT2] = useState(1)
const [t3,setT3] = useState(1)
const [t4,setT4] = useState(1)
const [t5,setT5] = useState(1)
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
          setAx(" Onsite Laptop and Computer Repairs for Home and Small Business.                                                      ")
            console.log('next')
            setT1(2)
            if(t1 == 2) {
                setAx("   MicroPls Computer Repair Services Melbourne                                                      ")
                setT2(2)
                if(t2 == 2) {
                    setAx("   Onsite PC, Laptop and Computer Repair                                                      ")
                    
                    setT3(2)
                    if(t3 == 2) {
                        setAx("   Computer Networking and Installation                                                      ")
                        setT4(2)
                        if(t4 == 2) {
                            setAx("   Data Backup Services                                                      ")
                            setT5(2)
                            if(t5 == 2) {
                            
                                setAx("   Virus and Malware Removal                                                      ")
                                setT1(1)
                                setT2(1)
                                setT3(1)
                                setT4(1)
                                setT5(1)
                                
                            }
                            
                        }
                    }
                }
                
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
