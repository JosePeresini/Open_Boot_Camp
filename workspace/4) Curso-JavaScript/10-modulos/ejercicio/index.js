import { suma, multiplicacion} from './controller.js';

const multiplicarSum = multiplicacion(suma(1, 2), suma(4, 5));

console.log(multiplicarSum);

import chalk from 'chalk';

console.log(chalk.green(multiplicarSum));