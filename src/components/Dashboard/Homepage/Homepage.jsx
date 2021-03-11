import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import csc from 'country-state-city';
import logo from '../../../assets/logos/logo.png';
import { userIcon, settingIcon, logoutIcon } from '../../../assets/icons';
import { organizedData } from '../../../helpers';
import { useAuth } from '../../../contexts/AuthContext';
import { app } from '../../../config/firebase';

import './style.css';
import List from '../List/List';

const Homepage = () => {
  const [selectedPosition, setSelectedPosition] = React.useState(null);
  const [addPosition, setAddPosition] = React.useState(null);
  const [userDetails, setUserDetails] = React.useState('');
  const [cities, setCities] = React.useState([]);
  const [error, setError] = React.useState('');
  const [addFormError, setAddFormError] = React.useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [dataList, setDataList] = React.useState(null);
  const [message, setMessage] = React.useState('');
  const [disableEdit, setDisableEdit] = React.useState(true);

  const [positionForm, setPositionForm] = React.useState(null);

  React.useEffect(() => {
    const unsubscribe = app
      .firestore()
      .collection('positions')
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
    var docRef = app.firestore().collection('users').doc(`${currentUser.uid}`);
    docRef.get().then((doc) => {
      if (doc.exists) {
        setUserDetails(doc.data());
      } else {
        console.error('No doc');
      }
    });
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
    setMessage('');
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      setError('Failed to log out.');
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setAddFormError('');
    setError('');
    setMessage('');

    if (!positionForm) {
      return setAddFormError('Must fill minimum one field 😡');
    }
    try {
      const id = Math.floor(Math.random() * Math.floor(100000));
      await app
        .firestore()
        .collection('positions')
        .doc(`${id}`)
        .set({
          uid: currentUser.uid,
          id: id,
          position: positionForm.position
            ? positionForm.position
            : 'Unknown Position',
          name: positionForm.name ? positionForm.name : 'Unknown Company',
          city: positionForm.city ? positionForm.city : 'Unknown City',
          company_url: positionForm.companyUrl ? positionForm.companyUrl : '',
          position_url: positionForm.positionUrl
            ? positionForm.positionUrl
            : '',
          hr_mail: positionForm.hrMail ? positionForm.hrMail : '',
          hr_name: positionForm.hrName ? positionForm.hrName : '',
          status: positionForm.status ? positionForm.status : 'Applied',
          description: positionForm.description ? positionForm.description : '',
          personalNote: positionForm.personalNote
            ? positionForm.personalNote
            : '',
        });
      setMessage(
        ' 🎉 Success add new position - ' +
          (positionForm.position
            ? positionForm.position + ' 🎉'
            : 'Unknown Position 🎉')
      );
      setPositionForm(null);
    } catch (error) {
      setError('Can not add position.');
      throw new Error(error.message);
    }
    setTimeout(() => {
      setMessage(null);
      setAddFormError(null);
      setError(null);
    }, 4000);
    setAddPosition(null);
  };

  const handleUpdate = async (prev) => {
    setAddFormError('');
    setError('');
    setMessage('');
    if (!positionForm) {
      return setAddFormError('No change was made 🙄 !');
    }

    console.log(prev);
    console.log(positionForm);

    try {
      await app
        .firestore()
        .collection('positions')
        .doc(`${prev.id}`)
        .update({
          position: positionForm.position
            ? positionForm.position
            : prev.position,
          name: positionForm.name ? positionForm.name : prev.name,
          city: positionForm.city ? positionForm.city : prev.city,
          company_url: positionForm.companyUrl
            ? positionForm.companyUrl
            : prev.company_url,
          position_url: positionForm.positionUrl
            ? positionForm.positionUrl
            : prev.position_url,
          hr_mail: positionForm.hrMail ? positionForm.hrMail : prev.hr_mail,
          hr_name: positionForm.hrName ? positionForm.hrName : prev.hr_name,
          status: positionForm.status ? positionForm.status : prev.status,
          description: positionForm.description
            ? positionForm.description
            : prev.description,
          personalNote: positionForm.personalNote
            ? positionForm.personalNote
            : prev.personalNote,
        });
      setSelectedPosition(null);
      setMessage('Update success 🎉 !');
    } catch (error) {
      setError('Can not update 😡 !');
      console.log(error);
      throw new Error(error.message);
    }

    setTimeout(() => {
      setMessage(null);
      setAddFormError(null);
      setError(null);
    }, 4000);

    setPositionForm(null);
  };

  const handleDelete = async (id) => {
    try {
      setError('');
      setMessage('');
      await app.firestore().collection('positions').doc(`${id}`).delete();
      setMessage('Success delete position!');
      setSelectedPosition(null);
    } catch (error) {
      setError('Can not delete position.');
      throw new Error(error);
    }
    setAddPosition(null);
    setTimeout(() => {
      setMessage(null);
      setError(null);
    }, 4000);
  };

  return (
    <>
      {!dataList && !userDetails}
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
          <div className='mr-5'>
            {error && (
              <div className='alert alert-danger' role='alert'>
                {error}
              </div>
            )}
            {message && (
              <div className='alert alert-success' role='alert'>
                {message}
              </div>
            )}
          </div>
          <span className='navbar-text'>
            <span className='mr-5'>
              <img
                src={userIcon}
                alt='user icon'
                className='userIcon mr-2'
              ></img>
              Welcome back
              {userDetails ? (
                ', ' + userDetails.firstName + ' ' + userDetails.lastName
              ) : (
                <div
                  className='ml-2 mr-2 spinner-grow spinner-grow-sm text-success'
                  role='status'
                ></div>
              )}
              !
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
      <List
        dataList={dataList}
        currentUser={currentUser}
        setError={setError}
        setMessage={setMessage}
        setAddPosition={setAddPosition}
        setSelectedPosition={setSelectedPosition}
      />

      {selectedPosition && (
        <>
          <div className='modal backdropWrapper' tabIndex='-1'>
            <div className='modal-dialog backdropModal' role='document'>
              <div className='modal-content'>
                <div className='modal-header w-100'>
                  <h4 className='modal-title '>
                    <div className='form-row'>
                      <div className='form-group col-md-5'>
                        <input
                          disabled={disableEdit}
                          className={`${
                            disableEdit ? 'displayForm' : 'form-control'
                          } `}
                          type='text'
                          id='positionDisplay'
                          defaultValue={selectedPosition.position}
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              position: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className='form-group col-md-5'>
                        <input
                          disabled={disableEdit}
                          type='text'
                          className={`${
                            disableEdit ? 'displayForm' : 'form-control'
                          } `}
                          id='nameDisplay'
                          defaultValue={selectedPosition.name}
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </h4>
                  <button
                    type='button'
                    className='close'
                    onClick={() => setSelectedPosition(null)}
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body w-100'>
                  <form>
                    <div className='d-flex flex-row justify-content-sm-between'>
                      <div className='col-sm-3'>
                        <label htmlFor='PositionDescriptionDisplay'>
                          Position Description
                        </label>
                        <textarea
                          disabled={disableEdit}
                          className={`${
                            disableEdit ? 'displayForm' : 'form-control'
                          } `}
                          name='positionDescriptionDisplay'
                          id='positionDescriptionDisplay'
                          rows='10'
                          defaultValue={selectedPosition.description}
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              description: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                      <div className='col-sm-3'>
                        <label htmlFor='personalNoteDisplay'>
                          Personal Note
                        </label>
                        <textarea
                          disabled={disableEdit}
                          className={`${
                            disableEdit ? 'displayForm' : 'form-control'
                          } `}
                          name='personalNoteDisplay'
                          id='personalNoteDisplay'
                          rows='10'
                          defaultValue={selectedPosition.personalNote}
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              personalNote: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>

                      <div className='d-flex flex-column'>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='positionUrlDisplay'
                            className='w-100 col-form-label'
                          >
                            Position Url
                          </label>
                          <div className='ml-2 text-center'>
                            <input
                              type='text'
                              className={`${
                                disableEdit
                                  ? 'displayForm'
                                  : 'form-control w-100'
                              } `}
                              disabled={disableEdit}
                              defaultValue={selectedPosition.position_url}
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  position_url: e.target.value,
                                })
                              }
                              id='positionUrlDisplay'
                            />
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='companyUrlDisplay'
                            className='w-100 col-form-label'
                          >
                            Company Url
                          </label>
                          <div className='ml-2 text-center'>
                            <input
                              type='text'
                              className={`${
                                disableEdit ? 'displayForm' : 'form-control'
                              } `}
                              disabled={disableEdit}
                              defaultValue={selectedPosition.company_url}
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  company_url: e.target.value,
                                })
                              }
                              id='companyUrlDisplay'
                            />
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='hrNameDisplay'
                            className='w-100 col-form-label'
                          >
                            HR Name
                          </label>
                          <div className='ml-2 text-center'>
                            <input
                              type='text'
                              className={`${
                                disableEdit ? 'displayForm' : 'form-control'
                              } `}
                              disabled={disableEdit}
                              defaultValue={selectedPosition.hr_name}
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  hr_name: e.target.value,
                                })
                              }
                              id='hrNameDisplay'
                            />
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='hrMailDisplay'
                            className='w-100 col-form-label'
                          >
                            Position Url
                          </label>
                          <div className='ml-2 text-center'>
                            <input
                              type='text'
                              className={`${
                                disableEdit ? 'displayForm' : 'form-control'
                              } `}
                              disabled={disableEdit}
                              defaultValue={selectedPosition.hr_mail}
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  hr_mail: e.target.value,
                                })
                              }
                              id='hrMailDisplay'
                            />
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='cityDisplay'
                            className='w-100 col-form-label'
                          >
                            City
                          </label>
                          <div className='ml-2 text-center'>
                            <select
                              className={`${
                                disableEdit ? 'displayForm' : 'form-control'
                              } `}
                              disabled={disableEdit}
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  city: e.target.value,
                                })
                              }
                              id='cityDisplay'
                            >
                              <option defaultValue={selectedPosition.city}>
                                {selectedPosition.city}
                              </option>

                              {cities.map((city) => (
                                <option key={city.name} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='statusDisplay'
                            className={`${
                              disableEdit
                                ? 'w-100 col-form-label'
                                : 'w-75 col-form-label'
                            }`}
                          >
                            Status
                          </label>
                          <div
                            className={`${
                              disableEdit
                                ? 'ml-2 text-center mr-5'
                                : 'w-50 text-center '
                            }`}
                          >
                            <select
                              className={`${
                                disableEdit
                                  ? 'displayForm mr-5'
                                  : 'form-control'
                              }`}
                              disabled={disableEdit}
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  status: e.target.value,
                                })
                              }
                              id='statusDisplay'
                            >
                              {dataList.map((data) => (
                                <option
                                  defaultValue={
                                    data.title === selectedPosition.status
                                      ? selectedPosition.status
                                      : false
                                  }
                                  key={data.title}
                                  value={data.title}
                                >
                                  {data.title}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='modal-footer'>
                  {addFormError && (
                    <div className='alert alert-info' role='alert'>
                      {addFormError}
                    </div>
                  )}
                  <button
                    type='submit'
                    className={`${
                      !disableEdit ? 'btn btn-success' : 'hideButton'
                    }`}
                    onClick={() => {
                      handleUpdate(selectedPosition);
                      setDisableEdit(!disableEdit);
                    }}
                  >
                    Save
                  </button>
                  <button
                    type='button'
                    className={`${
                      !disableEdit ? 'hideButton' : 'btn btn-info'
                    }`}
                    onClick={() => {
                      setDisableEdit(!disableEdit);
                    }}
                  >
                    Update
                  </button>
                  <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => handleDelete(selectedPosition.id)}
                  >
                    Remove
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => setSelectedPosition(null)}
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

      {addPosition && (
        <>
          <div className='modal backdropWrapper' tabIndex='-1'>
            <div className='modal-dialog backdropModal' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title'>
                    <strong>Add new position </strong>
                  </h5>
                  <button
                    type='button'
                    className='close'
                    onClick={() => {
                      setAddPosition(null);
                      setMessage(null);
                    }}
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body w-100'>
                  <form onSubmit={(e) => handleOnSubmit(e)}>
                    <div className='form-row mb-3'>
                      <small id='formInfo' className='form-text text-muted'>
                        * All fields can remain empty.
                      </small>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-md-6'>
                        <label htmlFor='position'>Position Name</label>
                        <input
                          type='text'
                          className='form-control'
                          id='position'
                          placeholder='Unknown Position'
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              position: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label htmlFor='name'>Company Name</label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          placeholder='Unknown Company'
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-md-6'>
                        <label htmlFor='company_url'>Company Website</label>
                        <input
                          type='text'
                          className='form-control'
                          id='company_url'
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              company_url: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label htmlFor='position_url'>Position URL</label>
                        <input
                          type='text'
                          className='form-control'
                          id='position_url'
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              position_url: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-md-6'>
                        <label htmlFor='hr_name'>HR Name</label>
                        <input
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              hr_name: e.target.value,
                            })
                          }
                          type='text'
                          className='form-control'
                          id='hr_name'
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <label htmlFor='hr_mail'>HR Mail</label>
                        <input
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              hr_mail: e.target.value,
                            })
                          }
                          type='email'
                          className='form-control'
                          id='hr_mail'
                          placeholder='hr@company.com'
                        />
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-md-6'>
                        <label htmlFor='city'>City</label>
                        <select
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              city: e.target.value,
                            })
                          }
                          id='inputState'
                          className='form-control'
                        >
                          <option defaultValue='Unknown city'>
                            Unknown city
                          </option>

                          {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='form-group col-md-6'>
                        <label htmlFor='status'>Status</label>
                        <select
                          onChange={(e) => {
                            console.log('status', e.target.value);
                            setPositionForm({
                              ...positionForm,
                              status: e.target.value,
                            });
                          }}
                          id='status'
                          className='form-control'
                        >
                          {dataList.map((data) => (
                            <option
                              defaultValue={
                                data.title === 'Applied' ? 'Applied' : false
                              }
                              key={data.title}
                              value={data.title}
                            >
                              {data.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className='form-row'>
                      <div className='form-group col-md-6'>
                        <label htmlFor='description'>
                          Position Description
                        </label>
                        <textarea
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              description: e.target.value,
                            })
                          }
                          className='form-control'
                          name='description'
                          id='description'
                          rows='3'
                        ></textarea>
                      </div>
                      <div className='form-group col-md-6'>
                        <label htmlFor='personalNote'>Personal Note</label>
                        <textarea
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              personalNote: e.target.value,
                            })
                          }
                          className='form-control'
                          name='personalNote'
                          id='personalNote'
                          rows='3'
                        ></textarea>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      {addFormError && (
                        <div className='alert alert-danger' role='alert'>
                          {addFormError}
                        </div>
                      )}
                      <button type='submit' className='btn btn-success'>
                        Submit
                      </button>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        onClick={() => {
                          setAddPosition(null);
                          setAddFormError(null);
                          setMessage(null);
                        }}
                      >
                        Close
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
