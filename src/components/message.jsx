import React from "react";

export const Message = ({ message, onMessageClick }) => {

    return <h3 className="area-ms" onClick={onMessageClick}>{message}</h3>;
}