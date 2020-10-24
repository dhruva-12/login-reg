import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Product = () => {
  const [file, setfile] = useState("");
  const [filename, setfilename] = useState("Choose File");

  const onChange = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    setfile(e.target.files[0]);
    setfilename(e.target.files[0].name);
  };
  return (
    <div>
      <h4>Add Product</h4>
      <form className="m-5">
        <div className="form-group">
          <label className="mx-2" for="title">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
          />
        </div>

        <div className="form-group">
          <label className="mx-2" for="description">
            Description:
          </label>
          <textarea cols="150"> </textarea>
        </div>

        <label>Is the product featured?</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            checked
          />
          <label className="form-check-label" for="exampleRadios1">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label className="form-check-label" for="exampleRadios2">
            No
          </label>
        </div>

        <div className="form-group mt-4">
          <label className="m-2" for="price">
            Price:
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter price"
          />
        </div>

        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile02"
              accept=".jpeg/.png/.jpg"
              onChange={onChange}
              multiple
            />
            <label className="custom-file-label" for="inputGroupFile02">
              Choose file
            </label>
            <label className="custom-file-label" htmlFor="customFile">
              {filename}
            </label>
          </div>
          <div className="input-group-append">
            <span className="input-group-text" id="">
              Upload
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Product;
