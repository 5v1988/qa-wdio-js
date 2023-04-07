import * as fs from 'fs';
import * as yaml from 'js-yaml';

export const readTestConfig = async (key) => {
    let yamlFile = fs.readFileSync('src/data/config.yml', "utf8");
    let td = await yaml.load(yamlFile);
    return td[key];
}

export const randomNumber = () => {
    return Math.floor(Math.random() * 1000000);
}