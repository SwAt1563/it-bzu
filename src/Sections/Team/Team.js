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
        index={index}
      />
    );
  });

  return (
    <>
      <div className="team p-5">
        <div className="container">
          <h4 className="text-center">
            مرشحو نادي الهندسة الكهربائية وهندسة الحاسوب 2022 \ 2023
          </h4>
          <hr />
          <div className="members">{members}</div>
        </div>
      </div>
    </>
  );
};

export default Team;
