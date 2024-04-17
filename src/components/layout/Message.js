import styles from './Message.module.css'
import {useState, useEffect} from 'react'

function Message({type, msg}){

    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        if(!msg){//sem mensagem, não retorna nada
            setVisible(false)
            return
        }
        setVisible(true) // com mensagem, retorna true e seta um timer de 3 sec

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    },[msg])
    return(
    <>
    {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
        
    </>
    )

}

export default Message;