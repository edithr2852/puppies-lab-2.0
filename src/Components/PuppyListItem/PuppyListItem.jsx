import React from "react";
import { Link } from "react-router-dom";

function PuppyListItem({ puppy, handleDeletePuppy }) {
  return (
    <div>
      <div>
        <h3>{puppy.name}</h3>
      </div>
      <div>
        <Link className="link"
          to={{
            pathname: "/details",
            state: { puppy },
          }}
        >
          DETAILS
        </Link>
        &nbsp; | &nbsp;
        <Link className="link"
          to={{
            pathname: "/edit",
            state: { puppy },
          }}
        >
          EDIT
        </Link>
        &nbsp; | &nbsp;
        <button
          onClick={() => handleDeletePuppy(puppy._id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}

export default PuppyListItem;