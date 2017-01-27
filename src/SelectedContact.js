import React, {PropTypes} from 'react';

const SelectedContact = props => {
  return (
    <li className="contact">
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="contact-info">
        <h2 onClick={() => props.onClickDeselect(props._id)}>{props.name}</h2>
        {props.occupation}
      </div>
    </li>
  );
};

SelectedContact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  _id: PropTypes.number.isRequired,
  onClickDeselect: PropTypes.func.isRequired
};


export default SelectedContact;