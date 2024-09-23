import { Metadata } from "next";


const defaultOpenGraph:Metadata['openGraph']={
    title:"Gudwin's Portfolio",
    description:"A portfolio website created using Next.js and framer motion",
    images:[
        {
            url:`${process.env.NEXT_PUBLIC_SERVER_URL}/images/og.png`
        }
    ],
    type:"website",
    url:`${process.env.NEXT_PUBLIC_SERVER_URL}`
}


export const mergeOpenGraph=(og?:Metadata['openGraph'])=>{
    return {
        ...defaultOpenGraph,
        ...og,
        image:og?.images ? og.images :defaultOpenGraph.images,
        title:og?.title ? og?.title :defaultOpenGraph.title,
        url:og?.url ? og?.url :defaultOpenGraph.url,
    }
}