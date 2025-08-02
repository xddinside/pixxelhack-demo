import "./GridTestPage.css"
import GridComponent from "./Components/GridComponent"

export function TestPage(){

    var Element1 = {
            "SectionName":"Chairs & Sofa",
            "BigImageUrlList":["/assets/images/sofa3.webp","/assets/images/sofa2.webp"],
            "SmallImageUrlList":["/assets/images/Chair6.webp","/assets/images/sofa2.webp","/assets/images/Chair2.webp"]
        }

    var Element2 = {
            "SectionName":"Tables",
            "BigImageUrlList":["/assets/images/sofa6.webp","/assets/images/sofa4.webp","/assets/images/sofa5.webp"],
            "SmallImageUrlList":["/assets/images/Chair2.webp","/assets/images/sofa1.webp","/assets/images/Chair3.webp"]
        }

    var GridElements = [Element1, Element2]

    return(
        <div className="Page">
            <GridComponent GridName={"Featured"} Description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident asperiores quia consequuntur quasi, culpa eligendi perferendis, ipsum architecto cumque eveniet optio iste similique, quam voluptatem?"} GridElements={GridElements}/>
        </div>
    )
}