import React from 'react';

// export const ItemList = (props) => <ul>
//     {props.items.map(item => <li>{item}</li>)}
// </ul>;

export const ItemList = (props) => {

return <ul>
    {props.items.map(item => <li>{item}</li>)}
</ul>

};
