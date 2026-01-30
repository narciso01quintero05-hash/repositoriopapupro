import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Preview({content}){
    return(
        <div style ={{padding: "10px" }}>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
                    </ReactMarkdown>



                    </div>
    )
}