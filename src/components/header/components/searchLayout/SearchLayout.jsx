import SearchIcon from '../../../../svg-icons/SearchIcon'
import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../../../context/SearchContext'

const SearchLayout = ({ show }) => {
  const { search, setSearch } = useSearch()
  const navigate = useNavigate()

  const handleSubmit = () => {
    localStorage.setItem('camper-search', search)
    navigate('/search')
  }

  return (
    <div className='small-search   d-flex flex-column text-white z-3'>
      <div className='align-center py-3 px-4 bg-dark border-dark border-bottom z-3'>
        <div>
          <SearchIcon size='24px' />
        </div>
        <div className='flex-grow-1 mx-3'>
          <form onSubmit={handleSubmit} >
            <input
              className='form-control p-0 ps-2 py-1 m-0 '
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </form>
        </div>

        <div className='' onClick={() => show(false)}>
          <button type="button" className="btn-close btn-close-white" />
        </div>
      </div>

      <div
        className='small-search-empty z-3 flex-grow-1'
        onClick={() => show(false)}
      ></div>
    </div>
  )
}

export default SearchLayout