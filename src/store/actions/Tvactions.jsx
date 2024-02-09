export {removetv} from '../reducers/tvslice'
import { loadtv } from '../reducers/tvslice'
import axios from '../../utils/axios'

export const asyncloadtv=(id)=>async(dispatch,getstate)=>{
    try {
       const detail=await axios.get(`/tv/${id}`) 
       const externalid=await axios.get(`/tv/${id}/external_ids`) 
       const recommendations=await axios.get(`/tv/${id}/recommendations`) 
       const similar=await axios.get(`/tv/${id}/similar`) 
       const videos=await axios.get(`/tv/${id}/videos`) 
       const translation=await axios.get(`/tv/${id}/translations`)
       const watchproviders=await axios.get(`/tv/${id}/watch/providers`) 
       let theultimatedetails={
        detail:detail.data,
        externalid:externalid.data,
        recommendations:recommendations.data.results,
        similar:similar.data.results,
        videos:videos.data.results.find((m)=>m.type==="Trailer"),
        watchproviders:watchproviders.data.results.IN,
        translation:translation.data.translations.map((t)=>t.english_name)
       };
       dispatch(loadtv(theultimatedetails))
       
    } catch (error) {
        console.log(error)
    }
}