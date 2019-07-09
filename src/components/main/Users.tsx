import React, { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import GoogleMaps from './GoogleMaps';
import { DropdownButton, Dropdown } from 'react-bootstrap';

interface IProps {
  title: string;
  handleSelectUser: Function;
  usersList?: Array<any>;
  error?: any;
}

function Users({ title, usersList = [] }: IProps) {
  function handleClick(user: any) {
    const lastLocation = user ? user.locations[user.locations.length - 1] : {};
    setLocation(lastLocation);
    setLocationsCount(user.locations.length);
    setModalVisible(true);
  }

  function hideModal() {
    setModalVisible(false);
  }

  const [selectedLocation, setLocation] = useState({});
  const [locationsCount, setLocationsCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className="container-fluid">
      <h1 className="title">{title}</h1>
      <GoogleMaps
        selectedLocation={selectedLocation}
        modalVisible={modalVisible}
        onHideModal={hideModal}
        locationsCount={locationsCount}
      />
      {usersList ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th style={{ width: '20%' }}>ID</th>
              <th style={{ width: '40%' }}>Name</th>
              <th style={{ width: '5%' }}>Locations</th>
              <th style={{ width: '20%' }} />
            </tr>
          </thead>
          <tbody>
            {usersList.map((user: any, index: number) => (
              <tr key={index}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.locations.length}</td>

                <td style={{ justifyContent: 'center' }}>
                  {user.locations.length > 0 ? (
                    <div style={{ flex: 1, flexDirection: 'row' }}>
                      <Button onClick={() => handleClick(user)}>Show</Button>
                      <DropdownButton
                        drop={'down'}
                        variant="secondary"
                        title={'Accidents'}
                        id={`dropdown-button-drop-down`}
                        key={'down'}
                        className="dropdown-button-drop-down"
                      >
                        {user.locations.map((l: any, i: number) => (
                          <Dropdown.Item
                            eventKey={i}
                            onClick={() => handleClick(user)}
                            key={i}
                          >
                            {l.location}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </div>
                  ) : (
                    []
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Users;
