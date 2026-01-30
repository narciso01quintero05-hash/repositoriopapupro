import { getByPlaceholderText } from "@testing-library/dom"

export default function editor({value,onCHANGE}){
return(
< 
textarea
value={value}
onChange={(e) => onCHANGE(e.target.value)}
style={{
    width: "100%",
    height:"100%",
    padding:"10px",
    fontSize:"16px"

}}
placeholder="Escribe aq nota"
/>



);

}