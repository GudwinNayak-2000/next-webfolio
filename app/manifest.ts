import { MetadataRoute } from "next";



export default function manifest():MetadataRoute.Manifest{
    return {
        name:"Gudwin's Portfolio",
        short_name:"Portfolio",
        description:"A portfolio website created using Next.js and framer motion",
        start_url:"/",
        display:"standalone",
        background_color:"#ffffff",
        theme_color:"#ffffff",
        icons:[
            {
                src:"/logo/logo-100.png",
                sizes:"100*100",
                type:"image/png",
            }
        ]

    }
}