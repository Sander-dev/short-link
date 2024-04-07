import React from "react";

export default function LimitPhrase(props) {
    const truncatedText = props.text.length > props.maxLength ? `${props.text.slice(0, props.maxLength)}...` : props.text;

    return <p>{truncatedText}</p>;
};
