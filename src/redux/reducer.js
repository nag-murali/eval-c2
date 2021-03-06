import {ALPHA_ASC, SEARCH, QUALITY_ASC, QUALITY_DESC} from "./actionTypes"
const init = {
    results: []
}

export const reducer = (store = init, action) => {
    
    switch(action.type){
      case SEARCH:
        //   console.log(action)
          let temp = [];
         temp =  action.ori_data.filter( (each) => {
           
                let str = each.title;
                if(str == undefined){
                  
                    return ;
                }
       
          
                if(str.includes(action.payload)){
                  return each;
                }
          });

         return {...store, results: [...temp]};

         case ALPHA_ASC:

             let temp_sort = store.results.sort( function (a , b) {return a.title.toLoweCase - b.title.toLoweCase});
             return store;
          case  QUALITY_ASC:
              let temp_qu = store.results.sort(function (a, b) { return a.quality - b.quality});
              return {...store, results:[...temp_qu]}
              case  QUALITY_DESC:
                let temp_qur = store.results.sort(function (a, b) { return b.quality - a.quality});
                return {...store, results:[...temp_qur]}    
          default:
              return store;
    }
}