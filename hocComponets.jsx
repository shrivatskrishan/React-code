import React, { useEffect, useState } from "react";


const HocComponents = (WrappedComponent) => {  
   

    return function Wrpped (props) {
         const [stateValue, setStateValue] = useState('sadasdasdqasdadasdas');
         const [isPrivate, setIsPrivate] = useState(false);
        console.log('props', props);
        useEffect(() => {
           setIsPrivate(props.isPrivate)
        }, []);

  

    return (<>{isPrivate && <WrappedComponent {...props} stateValue={stateValue} mobile={834184128312} message={'hi shrivats'} />}
    {!isPrivate && <div>you are not valid access</div>

    }
    </>)
  };

    


}
export default HocComponents




