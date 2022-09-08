import { IconBooks, IconChartBar } from '@tabler/icons'
import { showShelf } from '../../features/appShell/appShellSlice'

export const data = [
  {
    icon: <IconBooks />,
    name: 'Estante',
    handleClick: showShelf(),
  },
  { icon: <IconChartBar />, name: 'Metas' },
]
