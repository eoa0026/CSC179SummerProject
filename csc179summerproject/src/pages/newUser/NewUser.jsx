import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">

        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Deaux" />
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input type="text" placeholder="29" />
        </div>
        <div className="newUserItem">
          <label>Height</label>
          <input type="text" placeholder="177 cm" />
        </div>
        <div className="newUserItem">
          <label>Weight</label>
          <input type="text" placeholder="150 Lbs" />
        </div>
        <div className="newUserItem">
          <label>Pulse rate</label>
          <input type="text" placeholder="70 bpm" />
        </div>
        <div className="newUserItem">
          <label>Blood pressure</label>
          <input type="text" placeholder="115 | 80" />
        </div>
       
        <div className="newUserItem">
          <label>Gender Identity</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
            <option value="Non-Binary/non-conforming">Non-Binary/non-conforming</option>
            <option value="other">other</option>
            <option value="prefer not to say">prefer not to say</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}