import importX from 'eslint-plugin-import-x'
import tseslint from 'typescript-eslint'
import vitest from '@vitest/eslint-plugin'
import { builtinModules } from 'node:module'

const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

const banConstEnum = {
  selector: 'TSEnumDeclaration[const=true]',
  message:
    'Please use non-const enums. This project automatically inlines enums.',
}

export default tseslint.config()
