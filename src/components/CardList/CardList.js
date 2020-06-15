import React from 'react';

import Card from './Card/Card';

const CardList = (props) => {
    return (
        <div>
            {
                props.profiles.map(profile => {
                    return (
                        <Card key={profile.id}
                            {...profile} />
                    )
                })
            }
        </div>
    );
}

export default CardList;
