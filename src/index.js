import './style.css';

import githubIcon from './assets/icons/github.svg';
import linkedinIcon from './assets/icons/linkedin.svg';
import xIcon from './assets/icons/x.svg';

import emailIcon from './assets/icons/email.svg';
import phoneIcon from './assets/icons/phone.svg';
import redirectIcon from './assets/icons/redirect.svg';

document.querySelectorAll('.github').forEach((value) => {
    value.src = githubIcon;
    value.alt = 'github logo';
});
document.querySelectorAll('.linkedin').forEach((value) => {
    value.src = linkedinIcon;
    value.alt = 'linkedin logo';
});
document.querySelectorAll('.x').forEach((value) => {
    value.src = xIcon;
    value.alt = 'X logo';
});
document.querySelectorAll('.redirect').forEach((value) => {
    value.src = redirectIcon;
    value.alt = 'redirect icon';
});
document.querySelector('.phone').src = phoneIcon;
document.querySelector('.email').src = emailIcon;
