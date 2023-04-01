import * as fs from 'fs';
import * as yaml from 'js-yaml';

let getTd = async (key) => {
    let yamlFile = fs.readFileSync('/Users/natarajanveeramanikandan/dev-space/qa-wdio-js/src/data/data.yml', "utf8");
    let td = await yaml.load(yamlFile);
    return td[key];
}

export default getTd;