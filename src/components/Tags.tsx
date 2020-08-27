import React from "react";

/**
 * 
 * @param param0 Tags: Different technologies tages are shown using this component
 */
function Tags({ tags }: any) {
    return (
        <div className="tags-div">
            {tags.map((tag:string, index:number) => (
                <div className="badge chip" key={index}>{tag}</div>
            ))}
        </div>
    )
}

export default Tags;