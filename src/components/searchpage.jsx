import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { data_search, alpha_asc, alpha_desc, quality_asc, quality_desc } from "../redux/action";

export const Search = () => {
//   const search = useLocation().search;
//     const word = new URLSearchParams(search).get('q');
const data = useSelector( (store) => store.results);
const dispatch = useDispatch();
console.log(data)
const [text, setText] =  useState("");
const {keyword} = useParams();
const getData = (text) => {
   axios("https://fast-reef-22226.herokuapp.com/data")
   .then( (res) => {
       dispatch(data_search(text,res.data));
     
   })
}

useEffect(() => {
    console.log(keyword)
    getData(keyword)
},[])

    
    return (
        <div>
            <h1>search page: {keyword}</h1>
            <div id="navbar">
                <input type="text" onKeyPress={
                    (e) => {
                      if(e.key == "Enter"){
                        getData(e.target.value);
                      }
                    }
                }   onChange = {
                    (e) => {
                       setText(e.target.value)
                    }
                }/>
                <button className="search" onClick={
                    () => {
                        getData(text);
                    }
                }>Search</button>
            </div>
            <div>
                <button id="sort-alphabetically"
                onClick={
                    () => {
                        dispatch(alpha_asc())
                    }
                }
                >
                  Sort A-Z
                </button>

                <button id="sort-alphabetically-desc"
                onClick={
                    () => {
                        dispatch(alpha_desc)
                    }
                }
                >
                  Sort A-Z
                </button>

                <button id="sort-by-quality"
                onClick={
                    () => {
                        dispatch(quality_asc())
                    }
                }
                >
                  Sort ascnum
                </button>

                <button id="sort-by-quality-desc"
                onClick={
                    () => {
                        dispatch(quality_desc())
                    }
                }
                >
                  Sort desc num
                </button>

            </div>

            <div id="search-result ">
                {
                    data.map( (each,i) => {
                        return (
                            <div className="result" key={i}>
                                <a href="each.url">{each.url}</a>
                                <a href="each.url"><h1>{each.title}</h1></a>
                                <p>{each.description}</p>
                                <h2>{each.author}</h2>
                                <h4>creation_date:{each.creation_date}</h4>
                                <span>explicit:{each.explicit ? "YES" : "NO"}</span>
                                <br></br>
                                <span>quality:{each.quality}</span>
                                
                            </div>
                        );
                    })
                }
            </div>
            
        </div>
    );
}