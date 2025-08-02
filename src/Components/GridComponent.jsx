import "./Styles/GridComponent.css"
import { useEffect, useRef, useState } from "react";

function BigImageSection({BigImageUrlList}){
    const containerRef = useRef(null);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scrollAmount = container.clientWidth;

        // Decide new scrollLeft
        let nextScrollLeft = container.scrollLeft + scrollAmount * direction;

        if (nextScrollLeft >= container.scrollWidth - container.clientWidth) {
            // End reached → go backward
            nextScrollLeft = container.scrollLeft - scrollAmount;
            setDirection(-1);
        } else if (nextScrollLeft <= 0) {
            // Start reached → go forward
            nextScrollLeft = container.scrollLeft + scrollAmount;
            setDirection(1);
        }

        container.scrollTo({
            left: nextScrollLeft,
            behavior: "smooth",
        });
        }, 1700);

        return () => clearInterval(interval);
    }, [direction]);


    return(
        <div className="BigImageSection"  ref={containerRef}>
            {BigImageUrlList.map((url)=>(
                <div className="BigImage" key={url} style={{backgroundImage: `url("${url}")`}}></div>

            ))}
        </div>
    )
}

function SmallImageSection({SmallImageUrlList, SectionName}){

    return(
        <div className="SmallImageSection">
            <div className="SmallImage" style={{backgroundImage: `url("${SmallImageUrlList[0]}")`}}></div>
            <div className="SmallImage" style={{backgroundImage: `url("${SmallImageUrlList[1]}")`}}></div>
            <div className="SectionPageLinkArea">
                <div className="SectionPageLink">
                    <h3>{SectionName}</h3>
                    <div className="Link">Visit {">"}</div>
                </div>
            </div>
            <div className="SmallImage" style={{backgroundImage: `url("${SmallImageUrlList[2]}")`}}></div>
        </div>
    )
}

function SmallImageSectionReversed({SmallImageUrlList, SectionName}){

    return(
        <div className="SmallImageSection">
            <div className="SmallImage" style={{backgroundImage: `url("${SmallImageUrlList[0]}")`}}></div>
            <div className="SmallImage" style={{backgroundImage: `url("${SmallImageUrlList[1]}")`}}></div>
            <div className="SmallImage" style={{backgroundImage: `url("${SmallImageUrlList[2]}")`}}></div>
            <div className="SectionPageLinkArea">
                <div className="SectionPageLink">
                    <h3>{SectionName}</h3>
                    <div className="Link">Visit {">"}</div>
                </div>
            </div>
        </div>
    )
}


function GridImageSectionForwards({GridElement, Index}){

    if(Index%2==0){
    return(
        <div className="GridImageUpperSection">
            <BigImageSection BigImageUrlList={GridElement["BigImageUrlList"]}/>
            <SmallImageSection SmallImageUrlList={GridElement["SmallImageUrlList"]} SectionName={GridElement["SectionName"]}/>
        </div>
    )}

    return(
    <div className="GridImageUpperSection">
        <SmallImageSectionReversed SmallImageUrlList={GridElement["SmallImageUrlList"]} SectionName={GridElement["SectionName"]}/>
        <BigImageSection BigImageUrlList={GridElement["BigImageUrlList"]}/>
    </div>
    )


}


export function GridComponent({GridName, Description, GridElements})

{

    return (
        <div className="GridElement">
            <h1 className="SectionHead">{GridName}</h1>
            <p className="SectionDescription">{Description}</p>
            <div className="GridImageSection">
                <div className="ScrollSnapX">
                        {GridElements.map((Element,Index)=>(
                            <GridImageSectionForwards GridElement={Element} Index={Index}/>
                        ))}
                </div>
            </div>
        </div>
        )
} 

export default GridComponent