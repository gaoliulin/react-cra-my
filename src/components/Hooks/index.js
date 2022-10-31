import React, { useState, useEffect} from "react";

/**
 *  1.hooks 只可以拥有组件最外层 ， 不可以包括在 if，for 里面 
 *  2. 只在 React 函数中调用 Hook， 或者自定义 hook 中
 * @returns 
 */
const GetCount = () => {
    const [count, setCount] = useState(0);

    //  相当于  componentDidMount  componentDidUpdate  componentWillUnMount
    useEffect(()=>{
        console.log('count update');
        const timer = setTimeout(()=>{
            setCount(count+1)
        }, 1000)
        
        return ()=> {clearTimeout(timer)}
    }, [count])

    return(
        <div>
            <p >count: {count}</p>
            <button onClick={()=>setCount(count+1)} >count + 1</button>
        </div>
    )
}

export default GetCount;