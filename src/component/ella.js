import React from 'react';

class UserItem extends React.Component{

    render() {
        const{name,email} =this.props
        return(
            <div>
                <h2 className="actual name">{name}</h2>
                <h2 className="nhaaduel">{email}</h2>
                <hr></hr>
            </div>
        )
    }
}

export default UserItem;