// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickUpdateSearch = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-list" onClick={onClickUpdateSearch}>
      <p className="suggestion-name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow"
        alt="arrow icon"
      />
    </li>
  )
}

export default SuggestionItem
