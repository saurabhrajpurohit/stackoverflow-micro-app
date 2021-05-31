import React, { useEffect } from "react";

/**
 * Dialog Component
 */
export default (props: any) => {

    useEffect(() => {
        if (props.isOpen) {
            document.getElementById("modal-open-btn")?.click();
        }
    }, [props.isOpen])

    return (
        <>
            <button type="button" id="modal-open-btn" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" hidden></button>
            <div className="modal show" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            {props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}