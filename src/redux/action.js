
import {SEARCH, ALPHA_ASC, ALPHA_DESC, QUALITY_ASC, QUALITY_DESC} from "./actionTypes";

export const data_search = (data,items) => ({
    type: SEARCH,
    payload: data,
    ori_data: items
})

export const alpha_asc = () => ({
    type : ALPHA_ASC
})

export const alpha_desc = () => ({
    type : ALPHA_DESC
})

export const quality_asc = () => ({
    type : QUALITY_ASC
})

export const quality_desc = () => ({
    type : QUALITY_DESC
})