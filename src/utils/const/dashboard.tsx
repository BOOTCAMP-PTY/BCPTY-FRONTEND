import { SearchIcon } from './icons'

const dashboard = {
  namePerson: {
    width: '400px',
    height: '38px',
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '38px',
  },
  buscador: {
    width: '374px',
    height: '33px',
    fontWeight: '500px',
    fontSize: '28px',
    lineHeight: '33px',
  },
}

const Search = () => {
  return (
    <SearchIcon
      sx={{
        color: '#636363',
        width: '28px',
        height: '28px',
        marginRight: '11px',
      }}
    />
  )
}

export { dashboard, Search }
