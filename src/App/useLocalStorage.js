import React from "react";

function useLocalStorage(itemName, initialValue){
     const [item, setItem] = React.useState(initialValue); 
     const [loading, setLoading] = React.useState(true); 
     const [error, setError] = React.useState(false); 
     
     React.useEffect(()=>{

         const localStorageTodos = localStorage.getItem(itemName);
         let parsedItem;

          if(!localStorageTodos){
               localStorage.setItem(itemName, JSON.stringify([]));
          }else {
               parsedItem = JSON.parse(localStorageTodos);
          }

    });

    

    const saveItem = (newItem) => {
    
         localStorage.setItem(itemName, JSON.stringify(newItem));
         setItem(newItem);
    }

    return {item, saveItem, loading, error};
}

export { useLocalStorage }