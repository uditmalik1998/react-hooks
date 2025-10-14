import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({ name: "", age: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" onChange={handleChange} />
        </label>
      </div>
      <div>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
