import {createcontext,useContext} from "react";

const AppContext=createcontext();

const AppProvider=({children})=>{
    return (
       
<AppContext.Provider value={{myName:"yash"}}>
{children}
</AppContext.Provider>
    );
};

const useProductContext=()=>{
    return useContext(AppContext);
};

export {AppProvider,AppContext,useProductContext};


