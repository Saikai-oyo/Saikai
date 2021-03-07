import React from 'react';
import logo from '../../../assets/logos/logo.png';
import userIcon from '../../../assets/icons/user.svg';
import settingIcon from '../../../assets/icons/setting.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import addIcon from '../../../assets/icons/add.svg';
import mockData from '../../../mockup/MOCK_DATA.json';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import './style.css';

const Homepage = () => {
  const [selectedCompany, setSelectedCompany] = React.useState(null);
  const [error, setError] = React.useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  // DnD
  const dragItem = React.useRef();
  const [dragging, setDragging] = React.useState(false);

  const titles = ['Sent', 'Receive Task', 'Follow Up', 'Contract', 'Denied'];

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to log out.');
    }
  };

  const handleDragStart = (e, params) => {
    console.log('drag starting...', params);
    dragItem.current = params;
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a className='navbar-brand' href='/'>
            <img src={logo} width='170' height='50' alt='' />
          </a>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <a className='nav-link' href='/'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
          <span className='navbar-text'>
            {error && (
              <div className='alert alert-danger' role='alert'>
                {error}
              </div>
            )}
            <span className='mr-5'>
              <img
                src={userIcon}
                alt='user icon'
                className='userIcon mr-2'
              ></img>
              Welcome back, {currentUser.email}!
            </span>
            <span className='mr-2 navLink'>
              <Link to='/profile'>
                <img
                  src={settingIcon}
                  alt='setting icon'
                  className='userIcon mr-3'
                ></img>
              </Link>
            </span>
            <span className='mr-2 navLink' onClick={handleLogout}>
              <img
                src={logoutIcon}
                alt='logout icon'
                className='userIcon mr-1'
              ></img>
            </span>
          </span>
        </div>
      </nav>

      <div className='container'>
        <div className='row mt-5 text-center'>
          {titles.map((title, titleIndex) => (
            <div key={titleIndex} className='col cardLists'>
              <h3 className='listTitle'>{title}</h3>

              <ul className='list-unstyled mt-3'>
                {mockData.map((company, companyIndex) => {
                  const denied =
                    company.status === 'Denied' ? 'danger' : 'success';
                  return (
                    title === company.status && (
                      <li className='mb-2 ' key={company.id}>
                        <div
                          draggable
                          onDragStart={(e) =>
                            handleDragStart(e, { titleIndex, companyIndex })
                          }
                          className='card cardStyle '
                        >
                          <div
                            className={`btn-${denied} cardButton`}
                            onClick={() => setSelectedCompany(company)}
                          >
                            {company.name}
                            <br />
                            <span className='text-white-50 font-smaller'>
                              {company.city}
                            </span>
                          </div>
                        </div>
                      </li>
                    )
                  );
                })}

                <button type='button' className='mt-3 addCompanyButton'>
                  <img
                    src={addIcon}
                    className='mr-3 addIcon'
                    alt='add button'
                  />
                  Add new company
                </button>
              </ul>
            </div>
          ))}
        </div>
      </div>
      {selectedCompany && (
        <>
          <div className='modal backdropWrapper' tabindex='-1'>
            <div className='modal-dialog backdropModal' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>
                    <strong>Company: </strong>
                    {selectedCompany.name}
                  </h5>
                  <button
                    type='button'
                    className='close'
                    onClick={() => setSelectedCompany(null)}
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body w-100'>
                  <p className='mb-2'>
                    <strong>Company City:</strong> {selectedCompany.city}{' '}
                  </p>
                  <p className='mb-2'>
                    <strong>Company Website:</strong>{' '}
                    <a href={selectedCompany.company_url}>
                      {selectedCompany.company_url}
                    </a>
                  </p>
                  <p className='mb-2'>
                    <strong> Position URL:</strong>{' '}
                    <a href={selectedCompany.position_url}>
                      {selectedCompany.position_url}
                    </a>
                  </p>
                  <p className='mb-2'>
                    <strong>HR Name:</strong> {selectedCompany.hr_name}{' '}
                  </p>
                  <p className='mb-2'>
                    <strong>HR Mail:</strong>{' '}
                    <a href={`mailto:${selectedCompany.hr_mail}`}>
                      {selectedCompany.hr_mail}
                    </a>
                  </p>
                  <p className='mb-2'>
                    <strong>Status:</strong> {selectedCompany.status}{' '}
                  </p>
                  <p className='mb-2'>
                    <strong>Note:</strong>
                    <div className='card'>
                      <div className='card-body'>
                        {selectedCompany.note ? selectedCompany.note : ''}
                      </div>
                    </div>
                  </p>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => setSelectedCompany(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-backdrop show'></div>
        </>
      )}
    </>
  );
};

export default Homepage;
