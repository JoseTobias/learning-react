import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComonent from './components/FirstComponent';
// import { CompA, CompB} from './components/Two';
// import FamilySilva from './components/FamilySilva';
import Family from './components/Family';
import Member from './components/Member';


const el = document.getElementById('root');
ReactDOM.render(
    <div>
        <Family lastName='Pereira'>
            <Member name='Andre'></Member>
            <Member name='Mariana'></Member>
        </Family>
    </div>
, el);