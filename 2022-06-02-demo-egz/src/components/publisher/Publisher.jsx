import React from "react";

const Publisher = () => {
  return (
    <div className="publish">
      <h1>Create your own fundraiser!</h1>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Cash goal $" />
        <br />
        <textarea
          name=""
          cols="60"
          rows="10"
          placeholder="Describe the cause of this fundraiser"
        ></textarea>
        <br />
        <button>Send for evaluation</button>
      </form>
    </div>
  );
};

export default Publisher;
