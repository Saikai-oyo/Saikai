import React, { useState } from 'react';
import { formatDate, formatReversDate } from '../../../../helpers';

import { app } from '../../../../config/firebase';

import './style.css';

const ShowPosition = ({
  selectedPosition,
  setPositionForm,
  positionForm,
  setSelectedPosition,
  dataList,
  cities,
  addFormError,
  setAddFormError,
  setError,
  setMessage,
  setAddPosition,
}) => {
  const [disableEdit, setDisableEdit] = useState(true);

  const handleUpdate = async (prev) => {
    setAddFormError('');
    setError('');
    setMessage('');

    if (!positionForm) {
      return setAddFormError('No change was made 🙄 !');
    }

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
          date: positionForm.date ? formatDate(positionForm.date) : prev.date,
        });
      setSelectedPosition(null);
      setMessage('Update success 🎉 !');
    } catch (error) {
      setError(error.message);
      console.error(error);
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
      console.error(error);
    }
    setAddPosition(null);
    setTimeout(() => {
      setMessage(null);
      setError(null);
    }, 4000);
  };

  return (
    <>
      {selectedPosition && (
        <>
          <div
            className='modal fade bd-selected-position'
            tabIndex='-1'
            role='dialog'
            aria-labelledby='bd-selected-position'
            aria-hidden='true'
          >
            <div
              className='modal-dialog modal-dialog-centered modal-lg'
              role='document'
            >
              <div className='modal-content'>
                <div className='modal-header w-100'>
                  <h4 className='modal-title '>
                    <div className='form-row'>
                      <div className='form-group col-6'>
                        <label htmlFor='positionDisplay'>Position</label>
                        <textarea
                          disabled={disableEdit}
                          className='form-control '
                          rows='1'
                          cols='100'
                          id='positionDisplay'
                          defaultValue={selectedPosition.position}
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              position: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                      <div className='form-group col-6'>
                        <label htmlFor='companyDisplay'>Company</label>

                        <textarea
                          disabled={disableEdit}
                          className='form-control'
                          id='companyDisplay'
                          defaultValue={selectedPosition.name}
                          rows='1'
                          cols='100'
                          onChange={(e) =>
                            setPositionForm({
                              ...positionForm,
                              name: e.target.value,
                            })
                          }
                        ></textarea>
                      </div>
                    </div>
                  </h4>

                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'
                    onClick={() => {
                      setDisableEdit(true);
                      setSelectedPosition(null);
                    }}
                  >
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>

                <div className='modal-body'>
                  <form>
                    <div className='d-flex flex-column'>
                      <div className='row row-cols-md-2'>
                        <div className='col-xl-6 mb-2'>
                          <label htmlFor='PositionDescriptionDisplay'>
                            Description
                          </label>
                          <textarea
                            disabled={disableEdit}
                            className='form-control'
                            name='positionDescriptionDisplay'
                            id='positionDescriptionDisplay'
                            rows={`${
                              selectedPosition.description.length / 100 - 10 < 0
                                ? 1
                                : 5
                            }`}
                            defaultValue={selectedPosition.description}
                            onChange={(e) => {
                              setPositionForm({
                                ...positionForm,
                                description: e.target.value,
                              });
                            }}
                          ></textarea>
                        </div>
                        <div className='col-xl-6 mb-2'>
                          <label htmlFor='personalNoteDisplay'>Note</label>
                          <textarea
                            disabled={disableEdit}
                            className='form-control'
                            name='personalNoteDisplay'
                            id='personalNoteDisplay'
                            rows={`${
                              selectedPosition.personalNote.length / 100 - 10 <
                              0
                                ? 1
                                : 5
                            }`}
                            defaultValue={selectedPosition.personalNote}
                            onChange={(e) =>
                              setPositionForm({
                                ...positionForm,
                                personalNote: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                      </div>
                      <div className='d-flex flex-column w-100'>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='addDate'
                            className='w-50 col-form-label'
                          >
                            Position date
                          </label>
                          <div className='ml-2 text-center w-100 mb-3'>
                            <input
                              disabled={disableEdit}
                              type='date'
                              defaultValue={`${formatReversDate(
                                selectedPosition.date
                              )}`}
                              className='form-control w-100'
                              name='addDate'
                              id='addDate'
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  date: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className='d-flex flex-row align-items-center'>
                          <label
                            htmlFor='positionUrlDisplay'
                            className='w-50 col-form-label'
                          >
                            Position Url
                          </label>
                          <div className='ml-2 text-center w-100 mb-3'>
                            <input
                              type='text'
                              className='form-control w-100'
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
                            className='w-50 col-form-label'
                          >
                            Company Url
                          </label>
                          <div className='ml-2 text-center w-100 mb-3'>
                            <input
                              type='text'
                              className='form-control'
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
                            className='w-50 col-form-label'
                          >
                            HR Name
                          </label>
                          <div className='ml-2 text-center w-100 mb-3'>
                            <input
                              type='text'
                              className='form-control'
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
                            className='w-50 col-form-label'
                          >
                            HR Mail
                          </label>
                          <div className='ml-2 text-center w-100 mb-3'>
                            <input
                              type='text'
                              className='form-control'
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
                            className='w-50 col-form-label'
                          >
                            City
                          </label>
                          <div className='ml-2 text-center w-100 mb-3'>
                            <select
                              className='form-control'
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
                            className='w-50 col-form-label'
                          >
                            Status
                          </label>
                          <div className='ml-2 text-center w-100 mb-3'>
                            <select
                              className='form-control'
                              disabled={disableEdit}
                              onChange={(e) =>
                                setPositionForm({
                                  ...positionForm,
                                  status: e.target.value,
                                })
                              }
                              id='statusDisplay'
                            >
                              <option defaultValue={selectedPosition.status}>
                                {selectedPosition.status}
                              </option>
                              {dataList.map((data) => {
                                if (data.title !== selectedPosition.status) {
                                  return (
                                    <option key={data.title} value={data.title}>
                                      {data.title}
                                    </option>
                                  );
                                }
                              })}
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
                    type='button'
                    data-dismiss='modal'
                    aria-label='Close'
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
                    Edit
                  </button>
                  <button
                    type='button'
                    data-dismiss='modal'
                    aria-label='Close'
                    className={`${
                      disableEdit ? 'hideButton' : 'btn btn-danger'
                    }`}
                    onClick={() => {
                      setDisableEdit(true);
                      handleDelete(selectedPosition.id);
                    }}
                  >
                    Remove
                  </button>
                  <button
                    type='button'
                    data-dismiss='modal'
                    aria-label='Close'
                    className={`${
                      !disableEdit ? 'hideButton' : 'btn btn-secondary'
                    }`}
                    onClick={() => {
                      setDisableEdit(true);
                      setSelectedPosition(null);
                    }}
                  >
                    Close
                  </button>
                  <button
                    type='button'
                    className={`${
                      disableEdit ? 'hideButton' : 'btn btn-secondary'
                    }`}
                    onClick={() => {
                      setDisableEdit(!disableEdit);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ShowPosition;
