import {Exel} from '@/components/exel/Exel';
import {Table} from '@/components/table/Table';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';

import '@/scss/index.scss';

console.log('Start!');

const exel = new Exel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

exel.render();
