import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [prénom, setPrénom] = useState("");
  const [maladie, setMaladie] = useState("Cancer");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8082/users", {
        name,
        prénom,
        maladie,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Prénom</label>
            <div className="control">
              <input
               type="text"
                className="input"
                value={prénom}
                onChange={(e) => setPrénom(e.target.value)}
                placeholder="Prénom"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">maladie</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={maladie}
                  onChange={(e) => setMaladie(e.target.value)}
                >
                  <option value="Cancer">Cancer</option>
                  <option value="Cardique">Cardiovasculaire</option>
                  <option value="dermatologie">Dermatologie</option>
                  <option value="Deuxiéme Avis">Deuxiéme Avis</option>
                  <option value="Diadéte">Diadéte</option>
                  <option value="Mentale">Mentale</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;