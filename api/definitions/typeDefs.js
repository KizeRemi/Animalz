import { mergeTypes, fileLoader } from 'merge-graphql-schemas';
import path from 'path';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

export default mergeTypes(typesArray, { all: true });
