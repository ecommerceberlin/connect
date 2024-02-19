"use client"

import { useFetch } from "@/lib/fetch"
import { get } from 'lodash'
import { ScrollArea } from "@/components/ui/scroll-area"
import Markdown from 'react-markdown'
import { Suspense } from "react"

export function CompanyName({id}: {id: number}){

    const {data, isLoading, error} = useFetch(`/api/public/companies/${id}`)

    if(error || isLoading){
        return null
    }

    return get(data, "profile.name", "")

}

export function CompanyDetails({id}: {id: number}){

    const {data, isLoading, error} = useFetch(`/api/public/companies/${id}`)



    return <Suspense fallback={<div>asd</div>}><ScrollArea className="h-[200px] max-w-[750px] w-full rounded-md border p-4">
        <Markdown>{get(data, "profile.about", "")}</Markdown>
    </ScrollArea></Suspense>


}

/**
 * 
 

debut
: 
0
featured
: 
0
group_id
: 
23
id
: 
2089
instances
: 
(7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
organizer_id
: 
5
profile
: 
about
: 
"**3LP S.A.** (Member of the **WÜRTH GROUP**) is a **fully-automated logistics provider** with over **250 000** sqm of warehouse space in **6 logistics centers** across Poland. We are proud to be cooperating with such great **customers** as **IKEA**, **ESSITY**, TIM SA, Oponeo.pl, **Saint Gobain**, Rotopino.pl, and many more.  What makes us special is the use of the state-of-the-art automation warehouse solutions, such as **CUBY Shuttle System** and **Lean Lifts** together with **Cut’it!™ EVO** - **automated packaging solutions** that both increases productivity and reduces costs.\n\n\\\nWe are specialists in **fulfilment services**, from start to finish. Our operations ensure quick and easy integration with many eCommerce platforms - > **Comprehensive eCommerce Fulfilment** that’s got you covered:\n\n* Goods inbound\n* Automated Warehousing\n* Pick & pack\n* Deliveries\n* Returns\n\n\\\nFIND OUT MORE about [3LP SERVICES](https://3lp.eu/en/e-commerce-fulfillment/).\n\n\\\nAll our services are tailor-made for our customers and it’s our flexibility that makes us one of the most competitive logistics operators on the market. We address our Customers’ needs regarding constant sales growth and entering new online channels.\n\n\\\n**6 FULFILLMENT CENTERS with professional storage areas - 1 in Słubice, right at the German border**, which allow us to provide our services on the EU markets.\n\n* **Your products are in perfect condition** (we ensure the cleanliness, measure the temperature in the warehouses & monitor expiration dates and batch numbers, etc.).\n* **Safety of your stock** **guaranteed** (24/7 security, monitoring, alarm systems, limited access zones, etc.).\n* **Full logistics infrastructure for e-commerce fulfillment - it meets the needs of online stores from various industries** (e.g. metal shelves, hangers, limited access zones, \"high storage\", etc.).\n\n\\\nW**e use the warehouse space as efficiently as possible**, which translates into **lower storage costs for you.**\n\nCheck more about our [3LP WARESHOUSES.](https://3lp.eu/en/our-branches/)\n\n\\\nOUR MADE-TO-MEASURE OFFER  - **fulfillment service of e-commerce**, contract logistics  is supported by competitive rates, flexibility, and highest quality of logistics.\n\n\\\n**VISIT** us at our **STAND** **M5.1** **HALL 3** to talk about how 3LP SA can help you grow your business and accelerate your profits."
countries
: 
"europe"
expo
: 
""
facebook
: 
"https://www.facebook.com/3LPSA"
keywords
: 
(3) ['logistics', 'customer_support', 'omnichannel']
lang
: 
"en"
linkedin
: 
"https://www.linkedin.com/company/3lp-s.a/"
logotype
: 
"https://res.cloudinary.com/eventjuicer/image/upload/v1668074339/c_2089_logotype.png"
logotype_cdn
: 
"https://res.cloudinary.com/eventjuicer/image/upload/v1668074339/c_2089_logotype.png"
name
: 
"3LP S.A."
og_image
: 
"https://res.cloudinary.com/eventjuicer/image/upload/c_fit,h_210,w_800/u_ebe8_template_en,y_10/v1668074339/c_2089_logotype.png"
og_template
: 
"ebe8_template"
opengraph_image
: 
""
opengraph_image_cdn
: 
""
products
: 
"**fulfillment**\n\n**automated logistics**\n\n**ecommerce**\n\n**warehouse solutions**\n\n**buffer warehouse**\n\n**contact logistics**\n\n**cross border**\n\n\\\n"
thumbnail
: 
"https://res.cloudinary.com/eventjuicer/image/upload/w_600,h_600,c_fit,f_auto/v1668074339/c_2089_logotype.png"
twitter
: 
""
website
: 
"https://3lp.eu/en/"
[[Prototype]]
: 
Object
promo
: 
0
slug
: 
"3lpeu"


 */