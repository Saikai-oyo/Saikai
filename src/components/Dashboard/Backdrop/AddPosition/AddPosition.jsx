import React from 'react';
import { app } from '../../../../config/firebase';
import { formatDate, todayDate } from '../../../../helpers';
import { v4 as uuidv4 } from 'uuid';

import './style.css';

const AddPosition = ({
  addPosition,
  setAddPosition,
  setMessage,
  setPositionForm,
  positionForm,
  cities,
  dataList,
  addFormError,
  setAddFormError,
  setError,
  currentUser,
}) => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setAddFormError('');
    setError('');
    setMessage('');

    if (!positionForm) {
      return setAddFormError('Must fill minimum one field 😡');
    }

    try {
      const id = uuidv4();
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
          company_url: positionForm.company_url ? positionForm.company_url : '',
          position_url: positionForm.position_url
            ? positionForm.position_url
            : '',
          hr_mail: positionForm.hr_mail ? positionForm.hr_mail : '',
          hr_name: positionForm.hr_name ? positionForm.hr_name : '',
          status: positionForm.status ? positionForm.status : 'Applied',
          description: positionForm.description ? positionForm.description : '',
          personalNote: positionForm.personalNote
            ? positionForm.personalNote
            : '',
          date: positionForm.date ? positionForm.date : formatDate(todayDate()),
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
      console.error(error);
    }
    setTimeout(() => {
      setMessage(null);
      setAddFormError(null);
      setError(null);
    }, 4000);
    setAddPosition(null);
  };

  return (
    <>
      {addPosition && (
        <div
          className='modal fade bd-add-position'
          tabIndex='-1'
          role='dialog'
          aria-labelledby='bd-add-position'
          aria-hidden='true'
        >
          <div
            className='modal-dialog modal-dialog-centered modal-lg'
            role='document'
          >
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>
                  <strong>Add new position </strong>
                </h5>
                <button
                  type='button'
                  className='close'
                  onClick={() => {
                    setMessage(null);
                    setAddPosition(null);
                  }}
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <form onSubmit={(e) => handleOnSubmit(e)}>
                  <div className='form-row mb-3 d-flex justify-content-between'>
                    <small id='formInfo' className='form-text text-muted'>
                      * Fill at least one field
                    </small>
                    <small>
                      <label htmlFor='addDate' className='mr-3'>
                        Position date
                      </label>
                      <input
                        type='date'
                        defaultValue={`${todayDate()}`}
                        className='from-control'
                        name='addDate'
                        id='addDate'
                        onChange={(e) =>
                          setPositionForm({
                            ...positionForm,
                            date: e.target.value,
                          })
                        }
                      />
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
                      <label htmlFor='description'>Position Description</label>
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
                    <button
                      type='button'
                      className='btn btn-success'
                      data-dismiss={`${positionForm ? 'modal' : ''}`}
                      aria-label={`${positionForm ? 'Close' : ''}`}
                      onClick={handleOnSubmit}
                    >
                      Submit
                    </button>
                    <button
                      type='button'
                      className='btn btn-info'
                      data-dismiss='modal'
                      aria-label='Close'
                      onClick={() => {
                        setAddFormError(null);
                        setMessage(null);
                        setAddPosition(null);
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
      )}
    </>
  );
};

export default AddPosition;
