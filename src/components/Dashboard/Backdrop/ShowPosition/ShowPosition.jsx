import React, { useState } from 'react';
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
                    Edit
                  </button>
                  <button
                    type='button'
                    className={`${
                      disableEdit ? 'hideButton' : 'btn btn-danger'
                    }`}
                    onClick={() => handleDelete(selectedPosition.id)}
                  >
                    Remove
                  </button>
                  <button
                    type='button'
                    className='btn btn-secondary'
                    onClick={() => {
                      setDisableEdit(true);
                      setSelectedPosition(null);
                    }}
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

export default ShowPosition;
