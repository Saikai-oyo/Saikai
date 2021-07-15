import React, { useState, useContext, useEffect } from 'react';
import { StatusInput, PositionsInput, DescriptionInput, LinkInput, AdvanceInputs } from '../../Input';

import DateInput from '../../Input/DateInput';
import * as S from './style';
import ReactDOM from 'react-dom';
import { app } from '../../../config/firebase';

import { exitIcon } from '../../../assets/icons';
import { formatDate, todayDate } from '../../../helpers';
import { useAuth } from '../../../contexts/AuthContext';
import { MessagesContext } from '../../../contexts/MessagesContext';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

const AddPositionModal = ({ selectedTitle, open, onClose, columnInfo }) => {
    const { t, i18n } = useTranslation();
    const [title, setTitle] = useState(selectedTitle);
    const [titlePositions, setTitlePositions] = useState(selectedTitle);
    const [advance, setAdvance] = useState(false);
    const [positionForm, setPositionForm] = useState([]);
    const { setInformation } = useContext(MessagesContext);
    const selectedLang = i18n.language;

    useEffect(() => {
        setTitle(selectedTitle.title);
    }, [selectedTitle]);

    useEffect(() => {}, [titlePositions]);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                onClose();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { currentUser } = useAuth();

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setInformation({
            errorLine: null,
            error: '',
            message: '',
            haveError: false,
            haveMessage: false,
        });
        try {
            const id = uuidv4();
            await app
                .firestore()
                .collection('positions')
                .doc(`${id}`)
                .set({
                    uid: currentUser.uid,
                    id: id,
                    position: positionForm.position ? positionForm.position : 'Unknown Position',
                    name: positionForm.name ? positionForm.name : 'Unknown Company',
                    city: positionForm.city ? positionForm.city : '',
                    // company_url: positionForm.company_url ? positionForm.company_url : '',
                    position_url: positionForm.position_url ? positionForm.position_url : '',
                    hr_mail: positionForm.hr_mail ? positionForm.hr_mail : '',
                    hr_name: positionForm.hr_name ? positionForm.hr_name : '',
                    status: positionForm.status ? positionForm.status : title,
                    description: positionForm.description ? positionForm.description : '',
                    appliedBy: positionForm.appliedBy ? positionForm.appliedBy : '',
                    date: positionForm.date ? positionForm.date : formatDate(todayDate()),
                    createdDate: new Date().getTime(),
                });

            if (!titlePositions) {
                selectedTitle.positionIds.push(id);
                await app
                    .firestore()
                    .collection('users')
                    .doc(`${currentUser.uid}`)
                    .collection('columns')
                    .doc(`${selectedTitle.id}`)
                    .update(selectedTitle);
            } else {
                columnInfo.forEach((column) => (column.id === titlePositions.id ? column.positionIds.push(id) : null));
                await app
                    .firestore()
                    .collection('users')
                    .doc(`${currentUser.uid}`)
                    .collection('columns')
                    .doc(`${titlePositions.id}`)
                    .update(titlePositions);
            }

            setInformation({
                errorLine: [title, 'good'],
                message: t('modals.addNewPosition.successfullyAdded'),
                haveMessage: true,
            });
            setPositionForm(null);
        } catch (error) {
            setInformation({
                error: error.message,
                hasError: true,
            });
            console.error(error);
        }
        onClose();
        setAdvance(false);
        setTimeout(() => {
            setInformation({
                errorLine: null,
                error: '',
                message: '',
                haveError: false,
                haveMessage: false,
            });
        }, 4000);
    };

    if (!open) return null;
    return ReactDOM.createPortal(
        <>
            <S.BackDrop
                onClick={() => {
                    onClose();
                    setAdvance(false);
                }}
            />
            <S.ModalWrapper>
                <S.Header>
                    <S.HeaderTitle>{t('modals.addNewPosition.title')}</S.HeaderTitle>
                    <S.ExitBtn
                        onClick={() => {
                            onClose();
                            setAdvance(false);
                        }}
                        data-tooltip={t('dashboard.tooltips.exit')}>
                        <img src={exitIcon} alt="X" />
                    </S.ExitBtn>
                </S.Header>
                <S.Body advance={advance}>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <S.InputLineOne>
                            <S.Date>
                                <S.DateLabel htmlFor="addDate">
                                    {t('modals.addNewPosition.applicationDate')}:
                                </S.DateLabel>
                                <DateInput
                                    tabIndex="4"
                                    type="date"
                                    value={`${todayDate()}`}
                                    name="addDate"
                                    id="addDate"
                                    onChange={(e) =>
                                        setPositionForm({
                                            ...positionForm,
                                            date: e.target.value,
                                        })
                                    }
                                />
                            </S.Date>
                            <S.HiddenLabel htmlFor="positionName">
                                {t('modals.addNewPosition.positionName')}
                            </S.HiddenLabel>
                            <PositionsInput
                                tabIndex="1"
                                type="text"
                                id="positionName"
                                name="positionName"
                                placeholder={t('modals.addNewPosition.positionName')}
                                onChange={(e) =>
                                    setPositionForm({
                                        ...positionForm,
                                        position: e.target.value,
                                    })
                                }
                            />
                        </S.InputLineOne>

                        <S.InputLineTow>
                            <S.HiddenLabel htmlFor="companyName">
                                {t('modals.addNewPosition.companyName')}
                            </S.HiddenLabel>
                            <PositionsInput
                                tabIndex="2"
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder={t('modals.addNewPosition.companyName')}
                                onChange={(e) =>
                                    setPositionForm({
                                        ...positionForm,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </S.InputLineTow>

                        <S.InputLineThree>
                            <S.HiddenLabel htmlFor="description">
                                {t('modals.addNewPosition.positionDescription')}
                            </S.HiddenLabel>
                            <DescriptionInput
                                tabIndex="3"
                                onChange={(e) =>
                                    setPositionForm({
                                        ...positionForm,
                                        description: e.target.value,
                                    })
                                }
                                placeholder={t('modals.addNewPosition.positionDescription')}
                                name="description"
                                id="description"></DescriptionInput>
                        </S.InputLineThree>

                        <S.InputLineFour advance={advance}>
                            <S.HiddenLabel htmlFor="status"> {t('modals.addNewPosition.status')}</S.HiddenLabel>
                            <StatusInput
                                tabIndex="5"
                                name="status"
                                value={title}
                                t={t} // t={t} belongs to translation!
                                selectedLang={selectedLang}
                                onChange={(e) => {
                                    columnInfo.forEach(
                                        (column) =>
                                            e.target.value.replace(/\s/g, '') === column.id &&
                                            setTitlePositions(column),
                                    );
                                    setTitle(e.target.value);
                                    setPositionForm({
                                        ...positionForm,
                                        status: e.target.value,
                                    });
                                }}
                            />
                        </S.InputLineFour>

                        <S.InputAdvancedGroup advance={advance}>
                            <S.InputAdvancedLineOne>
                                <S.HiddenLabel htmlFor="positionUrl">
                                    {t('modals.addNewPosition.positionLink')}
                                </S.HiddenLabel>
                                <LinkInput
                                    tabIndex="6"
                                    name="positionUrl"
                                    onChange={(e) =>
                                        setPositionForm({
                                            ...positionForm,
                                            position_url: e.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder={t('modals.addNewPosition.positionLink')}
                                />
                            </S.InputAdvancedLineOne>
                            <S.InputAdvancedLineTwo>
                                <S.HiddenLabel htmlFor="hrName">{t('modals.addNewPosition.hrName')}</S.HiddenLabel>
                                <AdvanceInputs
                                    tabIndex="7"
                                    name="hrName"
                                    onChange={(e) =>
                                        setPositionForm({
                                            ...positionForm,
                                            hr_name: e.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder={t('modals.addNewPosition.hrName')}
                                />
                                <S.HiddenLabel htmlFor="hrMail">{t('modals.addNewPosition.hrMail')}</S.HiddenLabel>

                                <AdvanceInputs
                                    name="hrMail"
                                    tabIndex="8"
                                    onChange={(e) =>
                                        setPositionForm({
                                            ...positionForm,
                                            hr_mail: e.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder={t('modals.addNewPosition.hrMail')}
                                />
                            </S.InputAdvancedLineTwo>
                            <S.InputAdvancedLineThree>
                                <S.HiddenLabel htmlFor="city">{t('modals.addNewPosition.city')}</S.HiddenLabel>

                                <AdvanceInputs
                                    tabIndex="9"
                                    name="city"
                                    onChange={(e) =>
                                        setPositionForm({
                                            ...positionForm,
                                            city: e.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder={t('modals.addNewPosition.city')}
                                />
                                <S.HiddenLabel htmlFor="addBy">
                                    {t('modals.addNewPosition.appliedThrough')}
                                </S.HiddenLabel>

                                <AdvanceInputs
                                    tabIndex="10"
                                    name="addBy"
                                    onChange={(e) =>
                                        setPositionForm({
                                            ...positionForm,
                                            appliedBy: e.target.value,
                                        })
                                    }
                                    type="text"
                                    placeholder={t('modals.addNewPosition.appliedThrough')}
                                />
                            </S.InputAdvancedLineThree>
                        </S.InputAdvancedGroup>

                        <S.InputLineFive>
                            <S.SubmitButton type="submit" onClick={handleOnSubmit}>
                                {t('modals.addNewPosition.submit')}
                            </S.SubmitButton>
                            <S.CancelButton
                                onClick={() => {
                                    onClose();
                                    setAdvance(false);
                                }}>
                                {t('modals.addNewPosition.cancel')}
                            </S.CancelButton>
                        </S.InputLineFive>
                        <S.InputLineSix>
                            <S.AdvanceBtn
                                data-tooltip={t('dashboard.tooltips.advanced')}
                                type="button"
                                advance={advance}
                                onClick={() => {
                                    setAdvance(!advance);
                                }}>
                                {t('modals.addNewPosition.advanced')}
                            </S.AdvanceBtn>
                        </S.InputLineSix>
                    </form>
                </S.Body>
            </S.ModalWrapper>
        </>,
        document.getElementById('portal'),
    );
};

export default AddPositionModal;
