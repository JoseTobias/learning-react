import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashboard' icon='fas fa-tachometer-alt' />
    <MenuTree label='cadastro' icon='far fa-edit'>
      <MenuItem path='#billingCyles' label='Ciclos de pagamentos' icon='fas fa-dollar-sign' />
    </MenuTree>
  </ul>
)