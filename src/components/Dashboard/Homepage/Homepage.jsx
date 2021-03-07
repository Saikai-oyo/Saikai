import React from 'react';
import logo from '../../../assets/logos/logo.png';
import userIcon from '../../../assets/icons/user.svg';
import settingIcon from '../../../assets/icons/setting.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import addIcon from '../../../assets/icons/add.svg';
import mockData from '../../../mockup/MOCK_DATA.json';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

const Homepage = () => {
  const [selectedCompany, setSelectedCompany] = React.useState(null);
  const [error, setError] = React.useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const titles = ['Sent', 'Receive Task', 'Follow Up', 'Contract', 'Denied'];

  const newComp = {
    background: 'transparent',
    fontSize: '12px',
    border: '1.7px solid #1d9624a6',
    color: '#1D9624',
    borderRadius: '1rem',
    padding: '0.5rem',
  };

  const style = {
    padding: '1rem',
    backgroundColor: '#ebecf0bf',
    borderRadius: '1rem',
    marginRight: '1rem',
  };

  const cardStyle = { borderRadius: '1rem', cursor: 'pointer' };

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to log out.');
    }
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
            <span className='mr-2' style={{ cursor: 'pointer' }}>
              <Link to='/profile'>
                <img
                  src={settingIcon}
                  alt='setting icon'
                  className='userIcon mr-3'
                ></img>
              </Link>
            </span>
            <span
              className='mr-2'
              style={{ cursor: 'pointer' }}
              onClick={handleLogout}
            >
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
          {titles.map((title) => (
            <div className='col' style={style}>
              <h3
                style={{
                  borderBottom: '1px solid black',
                }}
              >
                {title}
              </h3>

              <ul className='list-unstyled mt-3'>
                {mockData.map((company) => {
                  const denied =
                    company.status === 'Denied' ? 'danger' : 'success';
                  return (
                    title === company.status && (
                      <li className='mb-2' key={company.id}>
                        <div draggable className='card' style={cardStyle}>
                          <div
                            className={`btn-${denied}`}
                            style={{
                              borderRadius: '1rem',
                            }}
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

                <button type='button' className='mt-3' style={newComp}>
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
          <div className='modal' tabindex='-1' style={{ display: 'block' }}>
            <div
              className='modal-dialog'
              role='document'
              style={{ maxWidth: '50%' }}
            >
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
