import React from 'react';
import PuppyList from '../../Components/PuppyList/PuppyList';
// import PuppyListItem from '../../Components/PuppyListItem/PuppyListItem';

function PuppyListPage({ puppies, handleDeletePuppy }) {
    return (
        <>
        <PuppyList 
        puppies={puppies}
        handleDeletePuppy={handleDeletePuppy}
        />
        </>
    );
}
export default PuppyListPage;