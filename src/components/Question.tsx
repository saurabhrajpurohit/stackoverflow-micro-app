import React from "react";

import Tags from "./Tags";
import { convertToDate } from "../Utils";

/**
 * Question Card Component
 * @param props Data passed from Parent
 */
function Question(props: any) {
    
    const question = props.question;

    return (
        <div className="card bg-light mb-3">
            <div className="card-body">
                <h5 className="card-title" onClick={props.onClick}>{question.title}</h5>
                <hr className="mb-0" />
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Tags tags={question.tags} />
                    </div>
                    <div className="col-12 col-md-6 text-right">
                        <span className="question-details"><i className="fa fa-user"></i>{question.owner.display_name}</span>
                        <span className="question-details"><i className="fa fa-clock-o"></i>{convertToDate(question.creation_date)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;