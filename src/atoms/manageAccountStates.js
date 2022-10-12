import { atom } from 'recoil';

export const showSuccessModal = atom({
    key: 'showSuccessModal',
    default: false,
});


export const viewAccountRecord = atom({
    key: 'viewAccountRecord',
    default: false,
});


export const buttonDisplay = atom({
    key: 'buttonDisplay',
    default: false,
});

export const bankID = atom({
    key: 'bankID',
    default: '',
});