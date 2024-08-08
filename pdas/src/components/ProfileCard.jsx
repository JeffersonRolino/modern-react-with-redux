function ProfileCard({ title, handle, image }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Personal Digital Assistant logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content"></div>
        <div className="title is-4">{title}</div>
        <div className="subtitle is-6">{handle}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
