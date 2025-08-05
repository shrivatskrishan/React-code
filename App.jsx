import { useEffect, useRef, useState } from 'react'

import './App.css'
import CircleMove  from './circule'; 
import DragAndDropComp from './dragAndDrop';
import ModelPopup from './modelPopup'
import HocComponents from './hocComponets';
import ToolTip from './tooltip'
import NotifyCompon from './notifyCompo'
import { useNotify } from './notifyHook';

import Toggeltheme from './togaleTheamChange'
import DebounceInput from './debounceInput';
import InputThotal from './trotalInputValue';

import MovieSearch from './moveSearch';
import CheckUseCallBackAndMemo from './useCallBackAndUseMemo';
const list = [
  { name: 'Apple', visible: true },
  { name: 'Banana', visible: false },
  { name: 'Cherry', visible: true },
  { name: 'Date', visible: false },
  { name: 'Elderberry', visible: true },
  { name: 'Fig', visible: true },
  { name: 'Grape', visible: false },
];


function App() {
  const [cirpostion, setCirpostion] = useState(null);
  const [isNotfiyOpen,setIsNotifyOpen]=useState(false);
  const {text,removeToast,showToast}=useNotify();
  const resfD=useRef();
  const incRef=useRef(0);

  

  const inputField = (e, keyD) => {
    setCirpostion((p)=>({...p,[keyD]:e.target.value}));
  };

  const submitForm = () => {
    const uerl=new URL(window.location.href)
    uerl.searchParams.set('name',cirpostion?.name)
    uerl.searchParams.set('email',cirpostion?.email)
    const a=uerl.toString()
    window.location.href=a
    
  };

 
 


// Example Usage:
const MyComponent = ({ message ,mobile,stateValue}) => {
    const [listData,setListData]=useState(list);

    
     const listDataa=useMemo(()=>{
        return listData.filter(item=>item.isready)
    },[listData])


     const handelClisk=useCallback((data)=>{
             console.log('👉 Item clicked:', data);
    },[])

      useEffect(()=>{
        console.log(resfD);
        (function (){
        resfD.current.innerText='dasdsaDASDASDASDASDASDAS'
    })()
      },[])

      const incrementLis=()=>{
          incRef.current.innerText= parseInt(incRef.current.innerText)+1;

      }
    

  // This component receives props from the HOC
  return<div>
    <div onClick={()=>incrementLis()}>click Me</div>
      <div ref={incRef} >0</div>
      <CheckUseCallBackAndMemo list={listDataa} onItemList={handelClisk} />
   <div ref={resfD}>asdasdas-{message}-{mobile} - {stateValue} </div> </div>;
};

const MyComponentWithLogger = HocComponents(MyComponent);

  return (
    <>
      <div> 
        {/* <div>
        <input onChange={e => inputField(e, 'name')} type={'text'} />
        <input onChange={e => inputField(e, 'email')} type={'text'} />
        <div onClick={() => submitForm()}>Submit</div>
      </div> */}
      {/* <CircleMove/> */}
   
      
      {/* <ModelPopup isOpen={true}/> */}
      {/* <MyComponentWithLogger  message={"hello world"} mobile={'423221312321'} /> */}

      {/* <ToolTip/> */}
      {/* <Toggeltheme/> */}
      {/* <button onClick={()=>{showToast('hi shrivats krishan')}}>hdahsdhjasdhasdjjhdasj</button>
      {
        <NotifyCompon textData={text}  removeToast={removeToast}/>
      } */}

        {/* <DebounceInput/> */}
        {/* <InputThotal/> */}
        {/* <MovieSearch/> */}
        <MyComponentWithLogger isPrivate={true}/>

        </div>
        
    </>
  )
}


export default App
