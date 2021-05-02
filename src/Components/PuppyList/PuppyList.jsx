import React from 'react';
import PuppyListItem from '../PuppyListItem/PuppyListItem';

export default function PuppyList({ puppies,handleDeletePuppy }) {
    const allpuppies = puppies.map(puppy => 
        <PuppyListItem 
        puppy={puppy} 
        handleDeletePuppy={handleDeletePuppy}
        />
        )

    return (
            <>
            <div className="PuppyList">
            <h1 className="PuppyListText"> Puppy List </h1>
            <main className="PuppyListText">{allpuppies}</main>
            </div>
            </>
        );
    }