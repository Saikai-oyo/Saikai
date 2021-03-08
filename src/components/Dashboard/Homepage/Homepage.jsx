import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import csc from 'country-state-city';
import logo from '../../../assets/logos/logo.png';
import {
  userIcon,
  settingIcon,
  logoutIcon,
  addIcon,
} from '../../../assets/icons';
import { organizedData } from '../../../helpers';
import { useAuth } from '../../../contexts/AuthContext';
import app from '../../../config/firebase';

import './style.css';

const Homepage = () => {
  const [selectedCompany, setSelectedCompany] = React.useState(null);
  const [addCompany, setAddCompany] = React.useState(null);
  const [deleteCompany, setDeleteCompany] = React.useState(null);
  const [cities, setCities] = React.useState([]);
  const [error, setError] = React.useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [dataList, setDataList] = React.useState(null);

  const [message, setMessage] = React.useState('');

  const nameRef = React.useRef();
  const cityRef = React.useRef();
  const companyUrlRef = React.useRef();
  const positionUrlRef = React.useRef();
  const hrMailRef = React.useRef();
  const hrNameRef = React.useRef();
  const statusRef = React.useRef();
  const noteRef = React.useRef();

  React.useEffect(() => {
    const unsubscribe = app
      .firestore()
      .collection('Companies')
      .onSnapshot((snapshot) => {
        const dbData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDataList(organizedData(dbData));
      });

    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    try {
      const citiesData = csc.getCitiesOfCountry('IL');
      setCities(citiesData);
    } catch (error) {
      throw new Error('error:', error.message);
    }
  }, []);

  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to log out.');
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * Math.floor(100000));
    app
      .firestore()
      .collection('Companies')
      .doc(`${id}`)
      .set({
        id: id,
        name:
          nameRef.current.value !== ''
            ? nameRef.current.value
            : 'Unknown Company',
        city: cityRef.current.value,
        company_url: companyUrlRef.current.value,
        position_url: positionUrlRef.current.value,
        hr_mail: hrMailRef.current.value,
        hr_name: hrNameRef.current.value,
        status: statusRef.current.value,
        note: noteRef.current.value,
      })
      .then(() => {
        setMessage(
          'Success add new company - ' +
            (nameRef.current.value !== ''
              ? nameRef.current.value
              : 'Unknown Company')
        );
      });
  };

  const handleDelete = (id) => {
    try {
      app.firestore().collection('Companies').doc(`${id}`).delete();
      setMessage('Success delete company!');
      setSelectedCompany(null);
    } catch (error) {
      setError('Can not delete company.');
      throw new Error(error);
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
            {error && !addCompany && (
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

      {!dataList ? (
        <div className='d-flex justify-content-center'>
          <div className='spinner-border text-success' role='status'></div>
        </div>
      ) : (
        <div className='container'>
          <div className='row mt-5 text-center'>
            {dataList.map((data) => (
              <div key={data.title} className='p-2 col h-100 cardLists'>
                <h3 className='listTitle'>{data.title}</h3>

                {data.items.map((company) => {
                  const isDenied =
                    company.status === 'Denied' ? 'danger' : 'success';
                  return (
                    data.title === company.status && (
                      <div
                        draggable
                        key={company.id}
                        className='card cardStyle mb-2 mt-3'
                      >
                        <div
                          className={`btn-${isDenied} p-1 cardButton`}
                          onClick={() => setSelectedCompany(company)}
                        >
                          {company.name}
                          <br />
                          <span className='text-white-50 font-smaller'>
                            {company.city}
                          </span>
                        </div>
                      </div>
                    )
                  );
                })}

                <button
                  type='button'
                  className='mt-3 addCompanyButton'
                  onClick={() => setAddCompany(true)}
                >
                  <img
                    src={addIcon}
                    className='mr-3 addIcon'
                    alt='add button'
                  />
                  Add new company
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCompany && (
        <>
          <div className='modal backdropWrapper' tabIndex='-1'>
            <div className='modal-dialog backdropModal' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>
                    <strong>Company: </strong>
                    {selectedCompany.name}
                    {message && (
                      <div className='alert alert-success' role='alert'>
                        {message}
                      </div>
                    )}
                    {error && (
                      <div className='alert alert-danger' role='alert'>
                        {error}
                      </div>
                    )}
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
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDelete(selectedCompany.id)}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='modal-backdrop show'></div>
        </>
      )}

      {addCompany && (
        <>
          <div className='modal backdropWrapper' tabIndex='-1'>
            <div className='modal-dialog backdropModal' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>
                    <strong>Add new company </strong>
                    {message && (
                      <div className='alert alert-success' role='alert'>
                        {message}
                      </div>
                    )}
                    {error && (
                      <div className='alert alert-danger' role='alert'>
                        {error}
                      </div>
                    )}
                  </h5>
                  <button
                    type='button'
                    className='close'
                    onClick={() => {
                      setAddCompany(null);
                      setMessage(null);
                    }}
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body w-100'>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div class='form-row'>
                      <div class='form-group col-md-6'>
                        <label for='inputEmail4'>Company Name</label>
                        <input
                          type='text'
                          class='form-control'
                          id='name'
                          placeholder='Unknown Company'
                          ref={nameRef}
                        />
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='inputState'>City</label>
                        <select
                          ref={cityRef}
                          id='inputState'
                          class='form-control'
                        >
                          <option selected value='Unknown city'>
                            Unknown city
                          </option>

                          {cities.map((city) => (
                            <option value={city.name}>{city.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div class='form-row'>
                      <div class='form-group col-md-6'>
                        <label for='inputPassword4'>Company Website</label>
                        <input
                          type='text'
                          class='form-control'
                          id='company_url'
                          ref={companyUrlRef}
                        />
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='inputAddress'>Position URL</label>
                        <input
                          type='text'
                          class='form-control'
                          id='position_url'
                          ref={positionUrlRef}
                        />
                      </div>
                    </div>
                    <div class='form-row'>
                      <div class='form-group col-md-6'>
                        <label for='inputAddress2'>HR Name</label>
                        <input
                          ref={hrNameRef}
                          type='text'
                          class='form-control'
                          id='hr_name'
                        />
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='inputAddress2'>HR Mail</label>
                        <input
                          ref={hrMailRef}
                          type='email'
                          class='form-control'
                          id='hr_mail'
                          placeholder='hr@company.com'
                        />
                      </div>
                    </div>
                    <div class='form-row'>
                      <div class='form-group col-md-6'>
                        <label for=''>Note</label>
                        <textarea
                          ref={noteRef}
                          class='form-control'
                          name=''
                          id=''
                          rows='3'
                        ></textarea>
                      </div>
                      <div class='form-group col-md-6'>
                        <label for='inputState'>Status</label>
                        <select
                          ref={statusRef}
                          id='inputState'
                          class='form-control'
                        >
                          {dataList.map((data) => (
                            <option value={data.title}>{data.title}</option>
                          ))}
                        </select>
                      </div>
                      <small id='formInfo' class='form-text text-muted'>
                        * All fields can remain empty.
                      </small>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={() => {
                          setAddCompany(null);
                          setMessage(null);
                        }}
                      >
                        Close
                      </button>
                      <button type='submit' className='btn btn-success'>
                        Submit
                      </button>
                    </div>
                  </form>
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
