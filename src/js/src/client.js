import fetch from 'unfetch';

export const getAllStudents = () => fetch('/students').then(res => res.json());

