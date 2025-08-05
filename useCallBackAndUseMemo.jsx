import React, { memo, useCallback, useMemo } from "react";

const CheckUseCallBackAndMemo=({list,onItemList})=>{

    




    return <div>
            {listData?.map((itemData,index)=><div onClick={()=>handelClisk(itemData)} key={index}>{itemData.name}</div>)

            }
    </div>

}

export default memo(CheckUseCallBackAndMemo)