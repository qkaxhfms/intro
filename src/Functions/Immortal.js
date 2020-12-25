import React from "react";

function Immortal() {
    const dog ={
        name:'멍멍이',
        age:2
    }

    const arr = [0,1,2,3,4,5,6]
    const arr1 = arr.concat(3);
    const newData = arr.map(function(item,idx){
        return(
            item*idx
        )
    })

    const newArr = arr.filter((item=>item>1))
    const newArr1 = arr.find((item => item>1))
    console.log(newArr);
    console.log(newArr1);

    return (
        <>
            <h3>불변성 유지</h3>
        </>
    );
}

export default Immortal;
