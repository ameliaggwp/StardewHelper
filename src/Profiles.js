import React from "react";

const Profile = ({ villager, reset }) => {
  if (!villager) {
    return <div></div>;
  }
  return (
    <div className="ui divided items">
      <div className="item">
        <div className="image">
          <img alt={villager.name} src={villager.image[villager.name]} />
        </div>
        <div className="content">
          <div className="header">{villager.name}</div>
          <button onClick={reset} className="ui red icon button right floated">
            <i className="close icon icon"></i>
          </button>

          <div className="meta">
            <span className="cinema">
              Marriage: {villager.marriage ? "Yes" : "No"}
            </span>
          </div>
          <div className="description">
            <div>
              <strong>
                <i className="birthday cake icon" />
              </strong>
              {villager.birthday[0]} {villager.birthday[1]}
            </div>
            <div>
              <strong>
                <i className="gift icon" />
              </strong>
              {villager.bestGift.join(", ")}
            </div>
            <div>
              <strong>
                <i className="users icon" />
              </strong>
              {villager.friends.join(", ")}
            </div>
          </div>
          <div className="extra">
            <a href={villager.url} className="ui label">
              <i className="globe icon" />
              Stardew Wiki
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
