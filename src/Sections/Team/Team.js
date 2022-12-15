import "./Team.css";
import { default as persons } from "../../Data/team";
import { Person } from "../../Components/index";
const Team = () => {
  const members = persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        photo={person.photo}
        status={person.status}
        about={person.about}
        contact={person.contact}
        index={index}
        
      />
    );
  });

  return (
    <>
      <div className="team p-5">
        <div className="container">
          <h2 className="title text-center mb-5">من نحن </h2>
          <hr className="mb-5" />
          <div className="members">{members}</div>
        </div>
      </div>
    </>
  );
};

export default Team;
