import React from 'react';
import {useLocation} from 'react-router-dom';

function PuppyDetailPage(props) {
  const { state: {puppy} } = useLocation()

  return (
    <>
    <main className="PuppyDetail">
      <h1>Puppy Details</h1>
      <div>Name: {puppy.name}</div>
      <div>Breed: {puppy.breed}</div> 
      <div>Age: {puppy.age}</div>
    </main>
    </>
  );
}
export default PuppyDetailPage;