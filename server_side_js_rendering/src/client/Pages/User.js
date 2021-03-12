import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/fetchUsers';

const _User = ({ users, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);

  const userList = () => {
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };
  return (
    <div>
      <ul>{userList()}</ul>
    </div>
  );
};

export const loadData = async (dispatch) => {
  await dispatch(fetchUser());
};
const mapStateToProps = (state) => {
  return { users: state.users };
};

export default {
  component: connect(mapStateToProps, { fetchUser })(_User),
  loadData,
};
