import React from 'react';
import ReactDOM from 'react-dom';

// import FirstComonent from './components/FirstComponent';
// import { CompA, CompB} from './components/Two';
// import FamilySilva from './components/FamilySilva';
// import Family from './components/Family';
// import Member from './components/Member';
// import WithFunction from './components/WithFunction';
// import Father from './components/Father';
// import ClassComponent from './components/ClassComponent';
// import Counter from './components/Counter';
import Hooks from './components/Hooks';


const el = document.getElementById('root');
ReactDOM.render(
    <div>
        <Hooks />
        {/* <WithFunction /> */}
        {/* <Family lastName='Pereira'>
            <Member name='Andre'></Member>
            <Member name='Mariana'></Member>
        </Family> */}
    </div>
, el);