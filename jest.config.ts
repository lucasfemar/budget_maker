import { Config } from 'jest';
import dotenv from 'dotenv';
import dotenv_expand from 'dotenv-expand';
const config_dotenv = dotenv.config({
    path: '.env.development',
});
dotenv_expand.expand(config_dotenv);
const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
};
module.exports = config;
