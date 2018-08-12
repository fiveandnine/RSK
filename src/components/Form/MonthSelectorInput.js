import React, {PureComponent} from 'react'
import MonthSelectorInput from '../SearchInput'
import field from './field'
import fieldDecorator from './fieldDecorator'

export default field(fieldDecorator(MonthSelectorInput));
