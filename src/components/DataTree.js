import React, { useState } from "react";

const List = ({ name, children }) => {

    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <li>
            <label onClick={() => handleClick()}>{name}</label>
            {open && children && (
                <ul>
                    {
                        children.map((item, index) => {
                            return <List key={index} name={item.name} children={item.children} />
                        })
                    }
                </ul>
            )}
        </li>
    );
};

export default List;
