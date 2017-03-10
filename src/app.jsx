import React from 'react';
import { render } from 'react-dom';
import 'style/main.styl';
import HelloView from 'views/HelloView';

render(<HelloView name="Joey" />, document.getElementById('root'));
