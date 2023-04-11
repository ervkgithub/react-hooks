import { useEffect} from 'react'

const useTitleCount = (count) => {
    useEffect(() =>{
        if(count > 0 ){
            document.title = `Chats (${count})`
        }
        else{
            document.title = `Chats (${count})`
        }
    },[count])
}

export default useTitleCount